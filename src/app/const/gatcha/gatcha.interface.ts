import { MAGrade } from '@/app/const/cards'

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
