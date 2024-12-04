import _ from 'lodash'
import createKey from '@/app/services/key-generator'
import { MACardBox } from '@/app/components/card/ma-card-box'
import { CardImageSize } from '@/app/components/card/ma-card.enum'
import { MACard, MACardDict, MACharacter, MAGrade } from '@/app/const/cards'

export function RecommendationCardBox({
  characterName,
  deck,
}: {
  characterName: MACharacter
  deck
}) {
  const cards = deck.list.map((cardNumber) => ({ ...MACardDict[cardNumber], number: cardNumber }))

  const deckList = _.sortBy(cards, (card) =>
    _.indexOf([MAGrade.MR, MAGrade.UR, MAGrade.SR, MAGrade.R, MAGrade.N], card.grade),
  )

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-blue-10 w-[300px] text-white p-[4px] text-[16px]">
        {characterName}
      </div>
      <div className="flex flex-wrap gap-[4px]">
        {deckList.map((card: MACard & { number: number }) => {
          return (
            <div key={createKey()} className="relative">
              <div className="relative">
                <MACardBox number={card.number} size={CardImageSize.XSMALL} />
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
