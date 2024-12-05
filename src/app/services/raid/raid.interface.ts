import { MACharacter, MAElementType, MAGrade } from '@/app/const/cards'
import { MAObjectType } from '@/app/services/ma.enum'

export enum MADifficulty {
  초급 = '초급',
  중급 = '중급',
  상급 = '상급',
  특급 = '특급',
  초특급 = '초특급',
}

export interface MARaidReward {
  number: number
  type: MAObjectType
  amount?: number
  isFirstClear?: boolean
  grade: MAGrade
}

export enum MARaidRewardType {
  일반 = '일반',
  명성 = '명성',
}

export interface RecommendationDeck {
  list: number[]
}

export interface MARaid {
  titleThumbnail: string
  name: string
  levels: MARaidLevel[]
  recommendation?: {
    deck: {
      [key: string | MACharacter]: RecommendationDeck
    }
    desc?: string
  }
  rewards?: {
    [key: string]: {
      normal: MARaidReward[]
      fame: MARaidReward[]
    }
  }
}

export interface MARaidLevel {
  name: string
  desc: string
  parts: MARaidPart[]
}

export interface MARaidPart {
  name: string
  skills: MARaidPartSkill[]
  attributes: {
    초급?: MARaidAttribute
    중급?: MARaidAttribute
    상급?: MARaidAttribute
    특급?: MARaidAttribute
    초특급?: MARaidAttribute
  }
}

export interface MARaidAttribute {
  element: MAElementType
  level: number
  life: number
  damageOfPhysical: number
  damageOfSpell: number
  regeneration: number
  armorOfPhysical: number
  armorOfSpell: number
}

export interface MARaidPartSkill {
  name: string
  desc: string
}
