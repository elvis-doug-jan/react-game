import React from 'react'

import { PlayerNameModal } from '@/components/Modal/PlayerName/playerName.component'

import * as S from './playerInfo.styles'

export const PlayerInfoPage = () => {
  return (
    <S.Container>
      <PlayerNameModal />
    </S.Container>
  )
}
