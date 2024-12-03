import { MACard, MAElementType, MAJobKind } from '@/app/const/cards'

export const getElementTypeEn = (elementType: MAElementType): string => {
  let convertedElementType: string = elementType
  if (elementType === MAElementType.어둠) {
    convertedElementType = 'dark'
  }
  if (elementType === MAElementType.불) {
    convertedElementType = 'fire'
  }
  if (elementType === MAElementType.얼음) {
    convertedElementType = 'ice'
  }
  if (elementType === MAElementType.바람) {
    convertedElementType = 'wind'
  }
  if (elementType === MAElementType.빛) {
    convertedElementType = 'light'
  }

  return convertedElementType
}

export const getJobKindEn = (type: MAJobKind): string => {
  let convertedType: string = type
  if (type === MAJobKind.강습) {
    convertedType = 'fight'
  }
  if (type === MAJobKind.지원) {
    convertedType = 'bard'
  }
  if (type === MAJobKind.수호) {
    convertedType = 'rich'
  }

  return convertedType
}

export const getCardElementMarkString = (targetCard: MACard) => {
  return `${getElementTypeEn(targetCard.elementType)}-${getJobKindEn(targetCard.jobKind)}`
}
