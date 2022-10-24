import styled, { css } from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { ReactNode } from 'react'

export type TypeProps = 'primary' | 'secondary'

type ContainerProps = {
  type: TypeProps
  children?: ReactNode
} & RectButtonProps

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800};

`
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE
}))``
