import React from 'react'

import * as S from './button.styles'

interface IButtonProps {
  text: string
}

export const Buttom = ({ text }: IButtonProps) => {
  return <S.Button>{text}</S.Button>
}
