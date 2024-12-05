'use client'

import createKey from '@/app/services/key-generator'
import { MACardBox } from '@/app/components/card/ma-card-box'
import { CardImageSize } from '@/app/components/card/ma-card.enum'
import { MACard, MACardDict, MAGrade } from '@/app/const/cards'
import { ExpandedRecommendationDeck } from '@/app/rd/recommendation.interface'
import Link from 'next/link'
import _ from 'lodash'

export function ExpandedRecommendationCardBox({ deck }: { deck: ExpandedRecommendationDeck }) {
  const cards = deck.list.map((cardNumber) => ({ ...MACardDict[cardNumber], number: cardNumber }))

  const deckList = _.sortBy(cards, (card) =>
    _.indexOf([MAGrade.MR, MAGrade.UR, MAGrade.SR, MAGrade.R, MAGrade.N], card.grade),
  )

  return (
    <div className="border border-gray-300 p-[4px] border-dashed">
      <div className="text-white text-[16px] flex flex-wrap items-stretch mb-[4px] gap-[4px]">
        <div className="border bg-white/80 flex justify-center items-center px-[6px] text-gray-800">
          {deck.field}
        </div>
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-[8px] rounded">
          {deck.characterName}
        </div>
        <div className="bg-gradient-to-r from-blue-950 to-blue-400 flex items-center px-[8px] rounded">
          {deck.name}
        </div>
        {deck.link && (
          <Link
            target="_blank"
            className="bg-green-500 hover:bg-green-400 transition-colors px-[2px]"
            href={deck.link}
          >
            [참고링크]
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-[4px]">
        {deckList.map((card: MACard & { number: number }) => {
          return (
            <div key={createKey()} className="relative">
              <div className="relative">
                <MACardBox number={card.number} size={CardImageSize.XXSMALL} />
                <div className="absolute right-[4px] bottom-[4px] z-20 bg-white rounded-full text-[14px] h-[20px] w-[20px] flex items-center justify-center font-bold border-gray-800 border border-dotted shadow shadow-gray-800/80">
                  {card.skillType}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
