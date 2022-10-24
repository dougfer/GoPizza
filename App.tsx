import React from 'react'
import theme from 'src/theme'
import { SignIn } from 'src/screens'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import 'react-native-gesture-handler'
import { AuthProvider, useAuth } from 'src/hooks/auth'

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor='transparent' translucent style='light' />
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

