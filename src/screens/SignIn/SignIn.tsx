import React from 'react'
import { Container } from './styles'
import { Input, Button } from 'src/components'
import { Alert } from 'react-native'

export const SignIn: React.FC = () => {

  return (
    <Container>
      <Input
        placeholder='E-mail'
        type='secondary'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Input 
        placeholder='Senha'
        type='secondary'
        secureTextEntry
      />
      <Button 
        title='Entrar'
        type='secondary'
        onPress={() => Alert.alert('teste')}
      />
      
    </Container>
  )
}
