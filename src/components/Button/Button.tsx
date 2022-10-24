import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Loading, Title, TypeProps } from './styles'

interface ButtonProps extends RectButtonProps {
  title: string
  type?: TypeProps
  isLoading?: boolean
  children?: ReactNode
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, type = 'primary', isLoading, onPress, ...rest }) => {
  return (
    <Container {...rest} type={type} enabled={!isLoading} onPress={onPress}>
      <View accessible accessibilityRole='button'>
        { isLoading ? <Loading /> : <Title>{title}</Title> }
      </View>
    </Container>
  )
}
