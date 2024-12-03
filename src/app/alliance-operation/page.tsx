'use client'

import { useEffect, useState } from 'react'
import { JORMUNGANDR, OFFNIL, PHONE_DARE_TAN } from '@/app/services/raid/raid.const'
import {
  MADifficulty,
  MARaid,
  MARaidAttribute,
  MARaidLevel,
} from '@/app/services/raid/raid.interface'
import createKey from '@/app/services/key-generator'
import { getElementTypeEn } from '@/app/services/card.translate'

export default function AllianceOperationPage() {
  const raids: MARaid[] = [OFFNIL, PHONE_DARE_TAN, JORMUNGANDR]
  const [selectedRaid, setSelectedRaid] = useState<MARaid>()
  const [selectedLevel, setSelectedLevel] = useState<MARaidLevel>()
  const [selectedDifficulty, setSelectedDifficulty] = useState<MADifficulty | string>(
    MADifficulty.중급,
  )

  useEffect(() => {
    if (!selectedRaid) return
    setSelectedLevel(selectedRaid.levels[0])
  }, [selectedDifficulty, selectedRaid])
  return (
    <div className="w-full">
      <div className="text-start mb-[10px]">
        추가중............... 연합 작전 몬스터 데이터가 들어갈 페이지입니다.
      </div>

      <div className="flex gap-[4px]">
        {raids.map((raid) => (
          <div
            key={createKey()}
            className="cursor-pointer border border-gray-800 shadow-md shadow-gray-500 rounded-sm"
            onClick={() => {
              setSelectedRaid(raid)
            }}
          >
            <img className="w-[200px]" src={raid.titleThumbnail} />
            <div className="text-gray-700 text-[16px] font-bold p-[4px] flex justify-center items-center">
              {raid.name}
            </div>
          </div>
        ))}
      </div>

      {selectedRaid && (
        <div className="mt-[10px]">
          <div className="w-full flex flex-col gap-[10px]">
            {/* 보스이름 */}
            <div className="text-start text-[24px] font-bold text-gray-700">
              {selectedRaid.name}
            </div>

            <hr className="border-gray-500" />

            {/* 난이도 */}
            <div className="flex">
              {Object.keys(MADifficulty).map((difficultyNameKey) => (
                <div
                  key={createKey()}
                  className={`cursor-pointer border px-[4px] py-[2px]
                    ${selectedDifficulty === difficultyNameKey ? 'bg-green-500 text-white' : ''}`}
                  onClick={() => setSelectedDifficulty(difficultyNameKey)}
                >
                  {difficultyNameKey}
                </div>
              ))}
            </div>

            {/* 단계 */}
            <div className="flex flex-row gap-[4px]">
              {selectedRaid.levels.map((level) => (
                <div
                  key={createKey()}
                  className={`border border-gray-600 px-[10px] cursor-pointer
                    ${selectedLevel?.name === level.name ? 'bg-green-500 text-white border-green-500' : 'bg-white'}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level.name}
                </div>
              ))}
            </div>
            <div className="text-start">
              <div>
                <div>일반 보상</div>
                <div className="flex justify-start items-center gap-[4px]">
                  {[1, 2, 3, 4].map(() => (
                    <div key={createKey()} className="text-[10px] w-[40px] h-[40px] border">
                      Empty
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>명성 보상</div>
                <div className="flex justify-start items-center gap-[4px]">
                  {[1, 2, 3, 4].map(() => (
                    <div key={createKey()} className="text-[10px] w-[40px] h-[40px] border">
                      Empty
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-gray-300 border-dashed my-[6px]" />
            {selectedLevel && (
              <div>
                <div className="text-start py-[10px]">{selectedLevel.desc}</div>
                <div className="text-start flex border border-gray-800">
                  {selectedLevel.parts.map((part, pIndex) => {
                    const attribute: MARaidAttribute =
                      part.attributes[selectedDifficulty as MADifficulty]!
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
                              {index !== 0 && (
                                <hr className="border-dashed border-gray-400 my-[4px]" />
                              )}
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
      )}
    </div>
  )
}
