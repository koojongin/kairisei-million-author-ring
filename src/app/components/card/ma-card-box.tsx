import { MACard, MACardDict } from '@/app/const/cards'
import { getElementTypeEn, getJobKindEn } from '@/app/services/card.translate'
import createKey from '@/app/services/key-generator'
import { CardImageSize } from '@/app/components/card/ma-card.enum'

export function MACardBox({ number, size = CardImageSize.LARGE }: any) {
  const LARGE_IMG_PATH = '/cards'
  const SMALL_IMG_PATH = '/cards-mini'

  const card: MACard = MACardDict[number]

  const getCardElementMarkString = (card: MACard) => {
    return `${getElementTypeEn(card.elementType)}-${getJobKindEn(card.jobKind)}`
  }

  return (
    <div
      key={createKey()}
      className={
        'inline-block bg-gray-300 rounded p-[4px] shadow-md cursor-pointer hover:[filter:drop-shadow(0_0_.15em_#47b4e7)_drop-shadow(0_0_.25em_#49b955)]'
      }
    >
      {size === CardImageSize.LARGE && (
        <>
          <img
            className="w-[100px]"
            src={`/img${LARGE_IMG_PATH}/${number}.png`}
          />
          <div className={'text-[14px] font-medium w-[100px] truncate'}>
            {card.name}
          </div>
        </>
      )}

      {size === CardImageSize.SMALL && (
        <div className={'relative'}>
          <div className={'absolute right-[-8px] top-[-8px] w-[28px] z-10'}>
            <img src={`/img/etc/cost-${card.cost}.png`} />
          </div>
          <div className={'absolute z-[1] shadow-lg'}>
            <img src={`/img/etc/frame-${card.grade.toLowerCase()}.png`} />
          </div>
          <div className={'absolute z-10 left-[-8px] top-[-8px] w-[28px]'}>
            <img src={`/img/etc/${getCardElementMarkString(card)}.png`} />
          </div>
          <div className={'relative z-0'}>
            <img
              className="w-[100px] p-[2px] z-0"
              src={`/img${SMALL_IMG_PATH}/${number}.png`}
            />
            <div
              className={
                'absolute z-10 ml-[2px] bottom-[10px] w-[90px] h-[10px] flex gap-0 shadow-lg shadow-black bg-black/50'
              }
            >
              {new Array(card.star).fill(1).map((key, index) => {
                return (
                  <img
                    key={createKey()}
                    src={`/img/etc/star.png`}
                    className={'absolute w-[18px]'}
                    style={{
                      left: `${index * 14}px`,
                    }}
                  />
                )
              })}
            </div>
          </div>
          <div className={'text-[14px] font-medium w-[100px] truncate'}>
            {card.name}
          </div>
        </div>
      )}

      {size === CardImageSize.XSMALL && (
        <div className={'relative w-[80px] flex flex-col'}>
          <div className={'absolute right-[-2px] top-[-5px] w-[20px] z-10'}>
            <img src={`/img/etc/cost-${card.cost}.png`} />
          </div>
          <div className={'absolute z-[1] shadow-lg'}>
            <img src={`/img/etc/frame-${card.grade.toLowerCase()}.png`} />
          </div>
          <div className={'absolute z-10 left-[-4px] top-[-4px] w-[20px]'}>
            <img src={`/img/etc/${getCardElementMarkString(card)}.png`} />
          </div>
          <div className={'relative z-0'}>
            <img
              className="p-[2px] z-0"
              src={`/img${SMALL_IMG_PATH}/${number}.png`}
            />
          </div>
          <div
            className={
              'flex items-center absolute left-[4px] bottom-[7px] bg-black/50 text-white h-[12px] rounded text-[16px] font-bold'
            }
          >
            <img
              key={createKey()}
              src={`/img/etc/star.png`}
              className={'w-[20px]'}
            />
            x{card.star}
          </div>
        </div>
      )}
    </div>
  )
}
