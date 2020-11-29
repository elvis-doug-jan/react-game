import styled from 'styled-components'

interface IButtonProps {
  disabled?: boolean
  background_color?: string
}

export const Button = styled.button`
  background-color: ${props => (props.color ? props.color : '#aa35cd')};
  color: white;
  min-height: 35px;
  min-width: 80px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  outline: none;
  padding: 7px 12px;

  &:active {
    background-color: #da5fff;
  }

  &:disabled {
    background-color: gray;
  }
`
