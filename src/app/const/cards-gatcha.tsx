export interface GatchaTitle {
  name: string
  list: GatchaPart[]
  titleThumbnail: string
}

export interface GatchaPart {
  rate: number
  cards: number[]
}

export const GATCHA_001: GatchaTitle = {
  name: '극지의 여정',
  titleThumbnail: '/img/gatcha/001-title.png',
  list: [
    // MR5,4
    { rate: 1.33, cards: [10, 12, 11, 17, 6, 13, 8, 3, 9, 5] },
    { rate: 2.17, cards: [24, 25, 14, 19, 21, 22, 16, 18] },

    // UR3,2
    {
      rate: 2.33,
      cards: [98, 28, 26, 32, 37, 35, 33, 27, 34, 31],
    },
    {
      rate: 6.88,
      cards: [93, 99, 100, 46, 48, 38, 41, 42, 45, 47, 43, 39, 44],
    },

    // SR3,2,1
    {
      rate: 4.51,
      cards: [61, 53, 49, 56, 52, 67, 60, 68, 40, 57, 55, 50, 65, 54, 59],
    },
    { rate: 10.76, cards: [64, 70, 62, 63, 72, 71, 69] },
    {
      rate: 18.06,
      cards: [101, 102, 103, 73, 104, 82, 78, 77, 81, 73, 79, 80, 83],
    },

    // R
    { rate: 20.74, cards: [95, 97, 105, 96, 106, 86, 74, 85, 75, 84, 76] },

    // N
    { rate: 33.22, cards: [107, 94, 90, 89, 88, 92, 91, 87] },
  ],
}

export function getRandomCard(gatchaList: GatchaTitle) {
  const { list } = gatchaList
  const totalRate = list.reduce((sum, item) => sum + item.rate, 0)
  const randomValue = Math.random() * totalRate
  let cumulativeSum = 0
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    cumulativeSum += item.rate
    if (randomValue < cumulativeSum) {
      const randomCardIndex = Math.floor(Math.random() * item.cards.length)
      return item.cards[randomCardIndex]
    }
  }
}
