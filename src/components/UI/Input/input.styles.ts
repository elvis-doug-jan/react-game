import styled from 'styled-components'

interface IInputProps {
  border?: string
}

export const Input = styled.input<IInputProps>`
  background-color: white;
  color: #aa35cd;
  border: none;
  min-width: 150px;
  width: 350px;
  min-height: 30px;
  border-radius: 7px;
  padding: 5px 10px;
  font-size: 18px;
  border: ${props => (props.border ? props.border : 'none')};
`
