'use client'

import {
  MADifficulty,
  MARaid,
  MARaidReward,
  MARaidRewardType,
} from '@/app/services/raid/raid.interface'
import createKey from '@/app/services/key-generator'
import { MAObjectType } from '@/app/services/ma.enum'
import { ITEMS_DICT } from '@/app/const/items'
import { MACardDict, MAGrade } from '@/app/const/cards'
import { getCardElementMarkString } from '@/app/services/card.translate'

export function RaidRewardList({
  raid,
  difficulty,
  rewardType,
}: {
  raid: MARaid
  difficulty: MADifficulty
  rewardType: MARaidRewardType
}) {
  const rewards: { normal: MARaidReward[]; fame: MARaidReward[] } = (raid?.rewards || {})[
    difficulty
  ]

  if (!rewards)
    return (
      <div key={createKey()} className="text-[10px] w-[70px] h-[70px] border">
        Empty
      </div>
    )
  return (
    <>
      {(rewardType === MARaidRewardType.일반 ? rewards.normal : rewards.fame).map((object) => {
        const card = MACardDict[object.number]
        return (
          <div key={createKey()} className="relative cursor-pointer">
            <div
              className={`relative w-[70px] h-[70px] flex items-center justify-center border border-gray-300 rounded-md shadow shadow-gray-800/80
              ${object.type === MAObjectType.ITEM && 'overflow-hidden'}`}
            >
              {object.isFirstClear && (
                <div className="absolute top-0 w-full text-[14px] font-bold text-center z-20 text-white py-[4px] pb-[6px] bg-gradient-to-b from-rose-600 to-red-700/10">
                  첫 클리어
                </div>
              )}
              {object.type === MAObjectType.ITEM && (
                <div
                  className="absolute w-full h-full z-0 bottom-[3px] bg-cover"
                  style={{
                    backgroundImage: `url('/img/etc/gradient-bg.webp')`,
                  }}
                />
              )}
              {object.type === MAObjectType.ITEM && (
                <img
                  className="p-[6px] z-10"
                  src={ITEMS_DICT[object.number].thumbnail}
                  title={ITEMS_DICT[object.number].name}
                />
              )}
              {object.type === MAObjectType.CARD && (
                <div className="z-0">
                  <img
                    className="w-[28px] absolute left-[-8px] top-[-5px] border-gray-800 border rounded-full"
                    src={`/img/etc/${getCardElementMarkString(card)}.png`}
                  />
                  <img
                    title={card.name}
                    src={`/img/cards-mini/${object.number}.png`}
                    className="overflow-hidden rounded-[6px]"
                  />
                  <div className="absolute z-10 bottom-[6px] w-full h-[8px] flex gap-0 shadow-lg shadow-black bg-black/20">
                    {new Array(card.star).fill(1).map((key, index) => {
                      return (
                        <img
                          key={createKey()}
                          src="/img/etc/star.png"
                          className="absolute w-[14px]"
                          alt={card.name}
                          style={{
                            left: `${index * 11}px`,
                          }}
                        />
                      )
                    })}
                  </div>
                </div>
              )}
              {object.amount && (
                <div className="absolute bottom-[2px] text-[16px] right-0 text-white font-bold z-20">
                  {object.amount}
                </div>
              )}
              <div className="absolute bottom-[0px] w-full h-[4px] z-0 rounded-full rounded-t-none overflow-hidden">
                {object.grade === MAGrade.MR && <img className="" src="/img/etc/h-frame-mr.webp" />}
                {object.grade === MAGrade.UR && <div className="bg-[#C254F7] w-full h-full" />}
                {object.grade === MAGrade.SR && <div className="bg-[#F5B15C] w-full h-full" />}
                {object.grade === MAGrade.R && <div className="bg-[#1F81D3] w-full h-full" />}
                {object.grade === MAGrade.N && <div className="bg-[#C27070] w-full h-full" />}
              </div>
            </div>
            <div className="absolute w-full h-full bg-white border-0 border-r-[1px] border-b-[1px] border-gray-400 rounded-md -z-10 left-[2px] top-[2px] shadow shadow-gray-400/70" />
          </div>
        )
      })}
    </>
  )
}
