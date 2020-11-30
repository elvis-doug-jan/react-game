import React from 'react'

import * as S from './card.styles'

interface ICards {
  cardNumber: number
}

export const Cards = ({ cardNumber }: ICards) => {
  return <S.Cards>Isso é uma carta</S.Cards>
}
