import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/UI/Buttons/button.styles'
import { Row } from '@/components/UI/Row/row.styled'

export const GameCenter = () => {
  const [playerName, getPlayerName] = useState('')

  useEffect(() => {
    const playerNameData = localStorage.getItem('playerName')

    getPlayerName(playerNameData || '')
  }, [])

  const exitGamePage = () => {
    localStorage.clear()
  }

  return (
    <div>
      <Row>Esse é o core do jogo. {playerName}</Row>
      <Row justify_content="center">
        <Link to="/">
          <Button onClick={() => exitGamePage()}>Sair</Button>
        </Link>
      </Row>
    </div>
  )
}
