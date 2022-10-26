import { LinearGradient } from 'expo-linear-gradient'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE}
  `}
`

export const DeleteLabel = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE}
  `}
`
