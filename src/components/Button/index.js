import React from 'react'
import Icon from 'components/Icon'
import {
  Button as ButtonStyled,
  ButtonText as ButtonTextStyled,
} from './styles'

const Button = ({ children }) => {
  return (
    <ButtonStyled>
      {Icon}
      <ButtonTextStyled>{children}</ButtonTextStyled>
    </ButtonStyled>
  )
}

export default Button