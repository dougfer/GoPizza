import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import { SignIn } from 'src/screens'

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='transparent' translucent style='light' />
      <SignIn />
    </ThemeProvider>
  )
}

