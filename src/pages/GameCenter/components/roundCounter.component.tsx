import React from 'react'

interface IRoundCounter {
  roundCounter: number
}

export const RoundCounter = ({ roundCounter }: IRoundCounter) => {
  return <div>Rodada Nº {roundCounter}</div>
}
