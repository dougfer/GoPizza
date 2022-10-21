import React from 'react'
import { Container } from './styles'
import { Input } from 'src/components'

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
      
    </Container>
  )
}
