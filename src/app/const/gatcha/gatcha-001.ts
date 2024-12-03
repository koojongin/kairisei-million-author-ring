import { GatchaTitle } from '@/app/const/cards-gatcha'
import { MAGrade } from '@/app/const/cards'

export const GATCHA_001: GatchaTitle = {
  name: '극지의 여정',
  titleThumbnail: '/img/gatcha/001-title.png',
  up: [
    { rate: 50, star: 5, grade: MAGrade.MR, list: [5, 9, 3, 8] },
    { rate: 50, star: 4, grade: MAGrade.MR, list: [18, 22, 16, 21] },
    { rate: 50, star: 3, grade: MAGrade.UR, list: [31, 34, 27, 33] },
  ],
  list: [
    // MR5,4
    { grade: MAGrade.MR, star: 5, rate: 1.33, cards: [10, 12, 11, 17, 6, 13, 8, 3, 9, 5] },
    { grade: MAGrade.MR, star: 4, rate: 2.17, cards: [24, 25, 14, 19, 21, 22, 16, 18] },

    // UR3,2
    {
      grade: MAGrade.UR,
      star: 5,
      rate: 2.33,
      cards: [98, 28, 26, 32, 37, 35, 33, 27, 34, 31],
    },
    {
      grade: MAGrade.UR,
      star: 5,
      rate: 6.88,
      cards: [93, 99, 100, 46, 48, 38, 41, 42, 45, 47, 43, 39, 44],
    },

    // SR3,2,1
    {
      grade: MAGrade.SR,
      star: 3,
      rate: 4.51,
      cards: [61, 53, 49, 56, 52, 67, 60, 68, 40, 57, 55, 50, 65, 54, 59],
    },
    { grade: MAGrade.SR, star: 2, rate: 10.76, cards: [64, 70, 62, 63, 72, 71, 69] },
    {
      grade: MAGrade.SR,
      star: 3,
      rate: 18.06,
      cards: [101, 102, 103, 73, 104, 82, 78, 77, 81, 73, 79, 80, 83],
    },

    // R
    {
      grade: MAGrade.R,
      star: 2,
      rate: 20.74,
      cards: [95, 97, 105, 96, 106, 86, 74, 85, 75, 84, 76],
    },

    // N
    { grade: MAGrade.N, star: 1, rate: 33.22, cards: [107, 94, 90, 89, 88, 92, 91, 87] },
  ],
}
