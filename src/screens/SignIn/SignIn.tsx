import React, { useState } from 'react'
import { 
  Container, 
  Content, 
  Title, 
  Brand, 
  ForgotPasswordButton, 
  ForgotPasswordLabel 
} from './styles'
import brandImg from 'src/assets/brand.png'
import { Input, Button } from 'src/components'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useAuth } from 'src/hooks/auth'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, isLogging } = useAuth()

  const handleSign = () => {
    signIn(email, password)
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : undefined}>
        <Content>
          <Brand source={brandImg} />
          <Title>
            Login
          </Title>
          <Input
            placeholder='E-mail'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />
          <Input 
            placeholder='Senha'
            type='secondary'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>
                Esqueci minha senha
            </ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button 
            title='Entrar'
            type='secondary'
            onPress={handleSign}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}
