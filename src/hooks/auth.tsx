import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>
  isLogging: boolean
  user: User | null
}

type User = {
  id: string
  name: string
  isAdmin: boolean
}

const USER_COLLECTION = '@gopizza:users'

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (email: string, password: string) => {
    if(!email || !password) {
      return Alert.alert('Login', 'Informe o e-mail e a senha')
    }

    setIsLoading(true)

    auth().signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then( async (profile) => {
            const { name, isAdmin } = profile.data() as User

            if(profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin
              }

              await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user))
              setUser(userData)
            }
          })
          .catch(() => Alert.alert('Login', 'Não foi possível buscar os dados de perfil do usuário.'))
      })
      .catch((err) => {
        const { code } = err

        if(code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'E-mail e/ou senha inválida.')
        } else {
          return Alert.alert('Login', 'Não foi possível realizar o login.')
        }
      }).finally(() => setIsLoading(false))
  }

  const loadUserStorageData = async () => {
    setIsLoading(true)

    const storagedUser = await AsyncStorage.getItem(USER_COLLECTION)

    if(storagedUser) {
      const userData = JSON.parse(storagedUser) as User
      console.log('storage', userData)
      setUser(userData)
    }

    setIsLoading(false)

  }

  useEffect(() => {
    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{ isLogging: isLoading, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}