import { useEffect, useState } from 'react'
import _ from 'lodash'
import { CardImageSize } from '@/app/components/card/ma-card.enum'
import { MACardDict } from '@/app/const/cards'
import { MACardBox } from '@/app/components/card/ma-card-box'
import createKey from '@/app/services/key-generator'

const TOTAL_CARDS_COUNT = 109
export function MACardList({
  checkedCosts,
  checkedGrades,
  checkedJobKinds,
  checkedSkillTypes,
  checkedElementTypes,
}: any) {
  const [cards, setCards] = useState<boolean[]>([])
  const [cardSize, setCardSize] = useState<CardImageSize>(CardImageSize.SMALL)

  useEffect(() => {
    setCards(
      new Array(TOTAL_CARDS_COUNT).fill(1).map((key, index) => {
        const number = index + 1
        const card = MACardDict[number]

        const validCosts: string[] = _.keys(_.pickBy(checkedCosts, Boolean))
        const isValidCost = validCosts.includes(`${card.cost}`)

        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(card.grade)

        const validElementTypes: string[] = _.keys(_.pickBy(checkedElementTypes, Boolean))
        const isValidElementType = validElementTypes.includes(card.elementType)

        const validJobKinds: string[] = _.keys(_.pickBy(checkedJobKinds, Boolean))
        const isValidJobKind = validJobKinds.includes(`${card.jobKind}`)

        const validSkillTypes: string[] = _.keys(_.pickBy(checkedSkillTypes, Boolean))
        const isValidSkillType = validSkillTypes.includes(card.skillType)

        return (
          isValidCost && isValidGrade && isValidJobKind && isValidSkillType && isValidElementType
        )
      }),
    )
  }, [checkedCosts, checkedElementTypes, checkedGrades, checkedJobKinds, checkedSkillTypes])

  return (
    <div className="flex flex-col items-start pb-[50px]">
      <div className="flex items-center justify-start gap-[10px] mb-[4px]">
        <div className="bg-white border-gray-200 border flex px-[15px] rounded-sm font-bold">
          카드수 : {cards.filter((data: any) => !!data).length}/{TOTAL_CARDS_COUNT}
        </div>
        <div className="flex items-center justify-center">
          <div
            className="bg-white border-gray-200 border flex px-[15px] rounded-sm font-bold cursor-pointer"
            onClick={() => setCardSize(CardImageSize.LARGE)}
          >
            크게
          </div>
          <div
            className="bg-white border-gray-200 border flex px-[15px] rounded-sm font-bold cursor-pointer"
            onClick={() => setCardSize(CardImageSize.SMALL)}
          >
            작게
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[10px] justify-center bg-white/70 border-gray-300 border-x border-y rounded-md py-[10px] shadow w-full">
        {cards.map((key, index: number) => {
          if (!key) return
          return <MACardBox number={index + 1} size={cardSize} key={createKey()} />
        })}
      </div>
    </div>
  )
}
