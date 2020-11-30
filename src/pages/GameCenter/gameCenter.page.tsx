import React, { useState } from 'react'

import { Container } from '@/components/Modal/modal.styles'
import { Button } from '@/components/UI/Buttons/button.styles'
import { Row } from '@/components/UI/Row/row.styled'

import { CardArea } from './components/cardArea.component'
import { RoundCounter } from './components/roundCounter.component'

export const GameCenter = () => {
  const [isShuffle, setIsShuffle] = useState(true)
  const [roundCount, setRoundCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)

  const ShowCard = (numberCard: number) => {
    setIsShuffle(false)

    setClickCount(prevState => {
      prevState += 1
      return prevState
    })

    if (clickCount === 2) {
      setRoundCount(prevState => {
        prevState += 1
        return prevState
      })

      setClickCount(0)
    }
  }

  return (
    <Container width="93vw" height="95vh">
      <CardArea showCard={ShowCard} isShuffle={isShuffle} hideNumbers />
      <Row justify_content="space-between">
        <Button>Ranking</Button>
        <RoundCounter roundCounter={roundCount} />
        <Button>Reiniciar a partida</Button>
      </Row>
    </Container>
  )
}
