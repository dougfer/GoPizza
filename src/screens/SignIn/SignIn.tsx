import React from 'react'
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
import { KeyboardAvoidingView } from 'react-native'

export const SignIn: React.FC = () => {

  return (
    <Container>
      <KeyboardAvoidingView behavior='padding'>
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
          />
          <Input 
            placeholder='Senha'
            type='secondary'
            secureTextEntry
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>
                Esqueci minha senha
            </ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button 
            title='Entrar'
            type='secondary'
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}
