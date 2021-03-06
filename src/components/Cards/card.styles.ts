import styled from 'styled-components'

interface ICard {
  keepingCard?: boolean
}

export const Cards = styled.div<ICard>`
  background-color: white;
  min-height: 180px;
  min-width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #aa35cd;
  border-radius: 7px;
  box-shadow: 0 0.8em 1em lightgray;
  margin: 10px;

  display: ${props => !props.keepingCard && 'none'};
`
