import _ from 'lodash'
import { GATCHA_001 } from '@/app/const/gatcha/gatcha-001'
import { GATCHA_002 } from '@/app/const/gatcha/gatcha-002'
import { MACardDict, MAGrade } from '@/app/const/cards'

export interface GatchaTitle {
  name: string
  list: GatchaPart[]
  titleThumbnail: string
  up?: { rate: number; star: number; grade: MAGrade; list: number[] }[]
}

export interface GatchaPart {
  rate: number
  cards: number[]
  grade: MAGrade
  star: number
}

export const GATCHA_TITLES = [GATCHA_001, GATCHA_002]

export function getRandomCard(gatchaList: GatchaTitle) {
  const { list } = gatchaList
  const totalRate = list.reduce((sum, item) => sum + item.rate, 0)
  const randomValue = Math.random() * totalRate
  let cumulativeSum = 0
  let cardNumber = 0
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    cumulativeSum += item.rate
    if (randomValue < cumulativeSum) {
      const randomCardIndex = Math.floor(Math.random() * item.cards.length)
      cardNumber = item.cards[randomCardIndex]
      break
    }
  }

  if (!gatchaList.up) return cardNumber
  const selectedCard = MACardDict[cardNumber]
  const foundUpList = gatchaList.up.find(
    (data) => data.star === selectedCard.star && data.grade === selectedCard.grade,
  )
  if (!foundUpList) return cardNumber
  const foundGatchaList = gatchaList.list.find(
    (data) => data.star === foundUpList.star && data.grade === foundUpList.grade,
  )
  if (!foundGatchaList) return cardNumber
  const dividedCards = _.difference(foundGatchaList.cards, foundUpList.list)
  return _.sample(_.sample([dividedCards, foundUpList.list]))
}
