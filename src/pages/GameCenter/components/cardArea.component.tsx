/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'

import { Cards } from '@/components/Cards/card.styles'
import { Row } from '@/components/UI/Row/row.styled'

interface ICardArea {
  showCard(cardNumber: number): void
  isShuffle: boolean
  hideNumbers: boolean
}

export const CardArea = ({ showCard, isShuffle, hideNumbers }: ICardArea) => {
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [sortedList, setSortedList] = useState(numberList)
  const [indexFirstCardSelected, setIndexFirstCardSelected] = useState(-1)
  const [indexSecondCardSelected, setIndexSecondCardSelected] = useState(-1)
  const [indexFirstToShow, setIndexFirstToShow] = useState([-1])
  const [indexSecondToShow, setIndexSecondToShow] = useState([-1])
  const [firstCardNumberSelected, setFirstCardNumberSelected] = useState(0)
  const [secondCardNumberSelected, setSecondCardNumberSelected] = useState(0)

  const shuffle = () => {
    if (isShuffle) {
      let atualIndex = numberList.length
      let tempValue = null
      let randomIndex = null

      while (atualIndex !== 0) {
        randomIndex = Math.floor(Math.random() * atualIndex)
        atualIndex -= 1

        tempValue = numberList[atualIndex]
        numberList[atualIndex] = numberList[randomIndex]
        numberList[randomIndex] = tempValue
      }
      setSortedList(numberList)
    }
  }

  const showCardSelected = (cardNumber: number, index: number) => {
    showCard(cardNumber)

    if (indexFirstCardSelected === -1) {
      setIndexFirstCardSelected(index)
      setFirstCardNumberSelected(cardNumber)
    }
    if (indexSecondCardSelected === -1 && indexFirstCardSelected !== -1) {
      setIndexSecondCardSelected(index)
      setSecondCardNumberSelected(cardNumber)
    }
    if (indexFirstCardSelected !== -1 && indexSecondCardSelected !== -1) {
      setIndexFirstCardSelected(-1)
      setIndexSecondCardSelected(-1)
    }

    if (
      firstCardNumberSelected === secondCardNumberSelected &&
      firstCardNumberSelected &&
      secondCardNumberSelected
    ) {
      setIndexFirstToShow(prevState => {
        prevState.push(index)
        return prevState
      })

      setIndexSecondToShow(prevState => {
        prevState.push(index)
        return prevState
      })
    }
  }

  const showCardsSelected = (index: number, cardNumber: number) => {
    return index === indexFirstCardSelected || index === indexSecondCardSelected
      ? cardNumber
      : '???'
  }

  // const hiddenCard = (index: number): boolean => {
  //   if (firstCardNumberSelected === secondCardNumberSelected) return true
  //   return false
  // }

  // const keepingShowCard = (index: number, cardNumber: number) => {
  //   if (indexFirstCardSelected !== -1 && indexSecondCardSelected !== -1) {
  //     if (firstCardNumberSelected === secondCardNumberSelected) {
  //       setIndexFirstToShow(prevState => {
  //         prevState.push(index)
  //         return prevState
  //       })

  //       setIndexSecondToShow(prevState => {
  //         prevState.push(index)
  //         return prevState
  //       })

  //       if (indexFirstToShow.includes(index) || indexSecondToShow.includes(index)) return true
  //     }
  //   }
  //   if (indexFirstCardSelected === -1 || indexSecondCardSelected === -1) return true
  //   return false
  // }

  useEffect(() => shuffle())

  return (
    <Row flex_wrap="wrap" justify_content="center">
      {sortedList.map((cardNumber, index) => (
        <>
          <Cards
            key={index}
            onClick={() => showCardSelected(cardNumber, index)}
            keepingCard
            // keepingCard={keepingShowCard(index, cardNumber)}
          >
            {showCardsSelected(index, cardNumber)}
          </Cards>
          {/* {<Cards key={index}>
            {cardNumber}
          </Cards>} */}
        </>
      ))}
    </Row>
  )
}
