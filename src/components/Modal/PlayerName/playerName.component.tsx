import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '../../UI/Buttons/button.styles'
import { Input } from '../../UI/Input/input.styles'
import { Row } from '../../UI/Row/row.styled'
import { Text } from '../../UI/Text/text.styles'
import * as S from './playerName.styles'

export const PlayerNameModal = () => {
  const [playerName, setPlayerName] = useState('')

  const [nextPageRoute, setNextPageRoute] = useState('/')
  const [dontReadyToNextPage, setDontReadyToNextPage] = useState(true)

  const validateField = () => {
    if (!playerName) {
      setDontReadyToNextPage(true)
      toast.error('O campo não pode ficar vazio!', {
        style: {
          zIndex: 9999,
        },
        position: 'top-right',
      })
      return
    }
    if (playerName.length < 3) {
      setDontReadyToNextPage(true)
      toast.error('Deve informar no mínimo 3 caracteres.', {
        style: {
          zIndex: 9999,
        },
        position: 'top-right',
      })
      return
    }

    setNextPageRoute('/game')
    setDontReadyToNextPage(false)
  }

  const handleInputPlayerName = (event: ChangeEvent<HTMLInputElement>) => {
    const playerNameInput = event.target.value

    setPlayerName(playerNameInput)

    localStorage.setItem('playerName', playerNameInput)

    validateField()
  }

  return (
    <S.ModalContainer>
      <Row justify_content="center">
        <Text>Informe seu nome!</Text>
      </Row>
      <br />
      <br />
      <Row justify_content="center">
        <Input
          border="2px solid #90ECB3"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputPlayerName(e)}
          onBlur={() => validateField()}
        />
      </Row>
      <br />
      <br />
      <Row justify_content="center">
        <Link to={nextPageRoute}>
          <Button disabled={dontReadyToNextPage}>Salvar e continuar</Button>
        </Link>
      </Row>
    </S.ModalContainer>
  )
}
