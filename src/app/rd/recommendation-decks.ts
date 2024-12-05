import { ExpandedRecommendationDeck, MAFieldType } from '@/app/rd/recommendation.interface'
import { MACharacter } from '@/app/const/cards'

export const EXPANDED_RECOMMENDATION_DECKS: ExpandedRecommendationDeck[] = [
  {
    field: MAFieldType.확산,
    name: '확산 용병 덱',
    characterName: MACharacter.용병,
    totalWeight: 84,
    list: [62, 60, 35, 44, 59, 57, 58, 71, 68, 67, 40],
    link: 'https://gall.dcinside.com/ma/3611046',
    bonds: 1,
  },

  {
    field: MAFieldType.일반,
    name: '폰 애쉬',
    characterName: MACharacter.용병,
    list: [9, 34, 35, 58, 57, 79, 72, 10, 14, 24],
    link: 'https://arca.live/b/millionarthur/122921095?p=1',
  },

  {
    field: MAFieldType.일반,
    name: '폰 애쉬',
    characterName: MACharacter.가희,
    list: [17, 29, 25, 13, 38, 61, 67, 52, 4, 86],
    link: 'https://arca.live/b/millionarthur/122921095?p=1',
  },

  {
    field: MAFieldType.일반,
    name: '폰 애쉬',
    characterName: MACharacter.도적,
    list: [35, 58, 57, 79, 72, 10, 14, 24, 71, 46],
    link: 'https://arca.live/b/millionarthur/122921095?p=1',
  },

  {
    field: MAFieldType.일반,
    name: '폰 애쉬',
    characterName: MACharacter.부호,
    list: [5, 19, 31, 6, 43, 55, 49, 74, 73, 7],
    link: 'https://arca.live/b/millionarthur/122921095?p=1',
  },

  {
    field: MAFieldType.일반,
    name: '폰 데어탄',
    characterName: MACharacter.가희,
    list: [4, 25, 13, 61, 86, 27, 67, 63, 52],
    link: 'https://arca.live/b/millionarthur/122654277',
  },
  {
    field: MAFieldType.일반,
    name: '폰 데어탄',
    characterName: MACharacter.부호,
    list: [31, 19, 43, 49, 103, 5, 74, 107, 101, 98],
    link: 'https://arca.live/b/millionarthur/122939418',
  },
  {
    field: MAFieldType.일반,
    name: '요르문간드',
    characterName: MACharacter.부호,
    list: [31, 19, 43, 49, 73, 6, 42, 5, 74, 103],
    link: 'https://arca.live/b/millionarthur/122939418',
  },
  {
    field: MAFieldType.일반,
    name: '오프닐',
    characterName: MACharacter.부호,
    list: [31, 73, 43, 19, 49, 6, 42, 5, 87, 77],
    link: 'https://arca.live/b/millionarthur/122939418',
  },
]
