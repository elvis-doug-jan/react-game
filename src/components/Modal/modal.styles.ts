import styled from 'styled-components'

interface IContainer {
  width?: string
  height?: string
  centralize?: boolean
}

export const Container = styled.div<IContainer>`
  min-height: 400px;
  min-width: 200px;
  overflow: auto;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  background-color: white;
  z-index: 999;
  border-radius: 14px;
  color: black;
  padding: 10px;

  ${props =>
    props.centralize &&
    `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`

export const CentralizeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
