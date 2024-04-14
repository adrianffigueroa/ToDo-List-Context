import { React } from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({ bgcolor = 'black', children, onClick }) => {
  return (
    <ButtonStyled bgcolor={bgcolor} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
