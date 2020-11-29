import styled from 'styled-components'

interface IRowProps {
  justify_content?: string
}

export const Row = styled.div<IRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.justify_content};
`
