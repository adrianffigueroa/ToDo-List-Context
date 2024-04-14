import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border-radius: 8px;
  font-weight: 700;
  color: white;
  background-color: ${({ bgcolor }) => `${bgcolor}`};
`
