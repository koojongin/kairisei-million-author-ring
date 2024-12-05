import React, { Dispatch, SetStateAction } from 'react'
import {
  MADifficulty,
  MARaid,
  MARaidAttribute,
  MARaidLevel,
  MARaidRewardType,
} from '@/app/services/raid/raid.interface'
import createKey from '@/app/services/key-generator'
import { RaidRewardList } from '@/app/alliance-operation/reward-box'
import { getElementTypeEn } from '@/app/services/card.translate'
import { RecommendationCardBox } from '@/app/alliance-operation/recommendation-card-box'
import { MACharacter } from '@/app/const/cards'

export function RaidDetail({
  raid,
  difficulty,
  setDifficulty,
  setLevel,
  level,
}: {
  raid: MARaid
  difficulty: MADifficulty | string | undefined
  level: MARaidLevel | undefined
  setDifficulty: Dispatch<SetStateAction<MADifficulty | string>>
  setLevel: Dispatch<SetStateAction<MARaidLevel | undefined>>
}) {
  const { recommendation } = raid
  if (!raid) return <div />
  return (
    <div className="mt-[10px]">
      <div className="w-full flex flex-col gap-[10px]">
        {/* 보스이름 */}
        <div className="text-start text-[24px] font-bold">{raid.name}</div>

        {/* <hr className="border-gray-500" />
        <div>
          <div className="font-bold text-[24px] mb-[5px]">추천 덱</div>
          {!recommendation && '추천 덱 데이터가 없습니다.'}
          {recommendation && (
            <div className="flex flex-col gap-[14px]">
              {recommendation.desc && (
                <div className="" dangerouslySetInnerHTML={{ __html: recommendation.desc }} />
              )}
              <div className="flex flex-col gap-[14px]">
                {Object.keys(recommendation.deck).map((characterName: MACharacter | string) => {
                  const deck = recommendation.deck![characterName]
                  return (
                    <div key={createKey()}>
                      <RecommendationCardBox characterName={characterName} deck={deck} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div> */}

        <hr className="border-gray-300 border-dashed my-[6px]" />
        {/* 난이도 */}
        <div className="flex">
          {Object.keys(MADifficulty).map((difficultyNameKey) => (
            <div
              key={createKey()}
              className={`cursor-pointer border px-[4px] py-[2px]
                    ${difficulty === difficultyNameKey ? 'bg-green-500 text-white' : ''}`}
              onClick={() => setDifficulty(difficultyNameKey)}
            >
              {difficultyNameKey}
            </div>
          ))}
        </div>

        {/* 단계 */}
        <div className="flex flex-row gap-[4px]">
          {raid.levels.map((rLevel) => (
            <div
              key={createKey()}
              className={`border border-gray-600 px-[10px] cursor-pointer
                    ${level?.name === rLevel.name ? 'bg-green-500 text-white border-green-500' : 'bg-white'}`}
              onClick={() => setLevel(rLevel)}
            >
              {rLevel.name}
            </div>
          ))}
        </div>

        {/* 보상 */}
        <div className="text-start flex flex-col gap-[14px]">
          <div>
            <div className="mb-[8px]">일반 보상</div>
            <div className="flex justify-start items-center gap-[4px]">
              <RaidRewardList
                raid={raid}
                difficulty={difficulty as MADifficulty}
                rewardType={MARaidRewardType.일반}
              />
            </div>
          </div>
          <div>
            <div className="mb-[8px]">명성 보상</div>
            <div className="flex justify-start items-center gap-[4px]">
              <RaidRewardList
                raid={raid}
                difficulty={difficulty as MADifficulty}
                rewardType={MARaidRewardType.명성}
              />
            </div>
          </div>
        </div>

        {/* 작전 설명 및 몬스터 정보 */}
        <hr className="border-gray-300 border-dashed my-[6px]" />
        {level && (
          <div>
            <div className="text-start py-[10px]">{level.desc}</div>
            <div className="text-start flex border border-gray-800">
              {level.parts.map((part, pIndex) => {
                const attribute: MARaidAttribute = part.attributes[difficulty as MADifficulty]!
                return (
                  <div
                    key={createKey()}
                    className={`flex-1 border-gray-800 ${pIndex && 'border-l'}`}
                  >
                    <div className="inline-block w-full">
                      {part.attributes && (
                        <div>
                          <div className="h-[38px] text-[20px] flex items-center gap-[4px] justify-center w-full bg-gray-400 text-white font-bold">
                            {attribute?.element && (
                              <img
                                className="w-[24px]"
                                src={`/img/etc/${getElementTypeEn(attribute.element)}-type.png`}
                              />
                            )}
                            {part.name}
                          </div>
                          {/* Attributes */}
                          <div className="text-[14px] border-y border-dashed border-gray-800 px-[10px]">
                            <div>
                              레벨:
                              {attribute?.level}
                            </div>
                            <div>체력: {attribute?.life?.toLocaleString()}</div>
                            <div>물리 공격: {attribute?.damageOfPhysical}</div>
                            <div>
                              마법 공격:
                              {attribute?.damageOfSpell}
                            </div>
                            <div>
                              회복량:
                              {attribute?.regeneration}
                            </div>
                            <div>물리 방어: {attribute?.armorOfPhysical}</div>
                            <div>
                              마법 방어:
                              {attribute?.armorOfSpell}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-[10px]">
                      {part.skills.map((skill, index) => (
                        <div key={createKey()} className="text-[16px] py-0">
                          {index !== 0 && <hr className="border-dashed border-gray-400 my-[4px]" />}
                          <div>
                            <div>{skill.name}</div>
                            <div>{skill.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
