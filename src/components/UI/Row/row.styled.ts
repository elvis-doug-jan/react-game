import styled from 'styled-components'

interface IRowProps {
  justify_content?: 'space-between' | 'space-around' | 'start' | 'center' | 'end'
  flex_wrap?: string
  width?: string
}

export const Row = styled.div<IRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.flex_wrap ? props.flex_wrap : 'nowrap')};
  justify-content: ${props => props.justify_content};
  align-content: center;
  width: ${props => (props.width ? props.width : '100%')};
`
