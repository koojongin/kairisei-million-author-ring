import { RecommendationDeck } from '@/app/services/raid/raid.interface'
import { MACharacter } from '@/app/const/cards'

export enum MAFieldType {
  일반 = '일반',
  확산 = '확산',
}

export interface ExpandedRecommendationDeck extends RecommendationDeck {
  characterName: MACharacter
  name: string
  desc?: string
  link?: string

  // 확산
  field: MAFieldType
  totalWeight?: number
  bonds?: number // 유대 갯수
}
