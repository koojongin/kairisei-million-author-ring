import { MAGrade } from '@/app/const/cards'
import { GatchaTitle } from '@/app/const/gatcha/gatcha.interface'

export const GATCHA_002: GatchaTitle = {
  name: '종말의 강림',
  titleThumbnail: '/img/gatcha/002-title.png',
  up: [{ rate: 50, star: 5, grade: MAGrade.MR, list: [2, 4, 7] }],
  list: [
    // MR5,4
    { grade: MAGrade.MR, star: 5, rate: 1.33, cards: [13, 6, 17, 11, 12, 10, 4, 2, 7] },
    { grade: MAGrade.MR, star: 5, rate: 2.17, cards: [24, 14, 25, 19] },

    // UR3,2
    {
      grade: MAGrade.UR,
      star: 3,
      rate: 2.33,
      cards: [98, 26, 28, 32, 35, 37],
    },
    {
      grade: MAGrade.UR,
      star: 2,
      rate: 6.88,
      cards: [100, 99, 93, 48, 46, 39, 44, 43, 47, 42, 45, 38, 41],
    },

    // SR3,2,1
    {
      grade: MAGrade.SR,
      star: 3,
      rate: 4.51,
      cards: [59, 54, 65, 50, 49, 53, 61, 55, 57, 40, 68, 60, 67, 52, 56],
    },
    { grade: MAGrade.SR, star: 2, rate: 10.76, cards: [69, 64, 71, 72, 63, 62, 70] },
    {
      grade: MAGrade.SR,
      star: 1,
      rate: 18.06,
      cards: [101, 103, 104, 102, 108, 83, 80, 81, 79, 77, 78, 82, 73],
    },

    // R
    {
      grade: MAGrade.R,
      star: 1,
      rate: 20.74,
      cards: [106, 96, 105, 97, 95, 76, 84, 75, 85, 74, 86],
    },

    // N
    { grade: MAGrade.N, star: 1, rate: 33.22, cards: [107, 94, 87, 91, 92, 88, 89, 90] },
  ],
}
