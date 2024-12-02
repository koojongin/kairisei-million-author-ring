'use client'
import { OFFNIL, PHONE_DARE_TAN } from '@/app/services/raid/raid.const'
import { MARaid, MARaidLevel } from '@/app/services/raid/raid.interface'
import createKey from '@/app/services/key-generator'
import { useEffect, useState } from 'react'

export default function AllianceOperationPage() {
  const raids: MARaid[] = [OFFNIL, PHONE_DARE_TAN]
  const [selectedRaid, setSelectedRaid] = useState<MARaid>()
  const [selectedLevel, setSelectedLevel] = useState<MARaidLevel>()

  useEffect(() => {
    if (!selectedRaid) return
    setSelectedLevel(selectedRaid.levels[0])
  }, [selectedRaid])
  return (
    <div className={'w-full mt-[15px]'}>
      <div className={'text-start mb-[10px]'}>
        추가중............... 연합 작전 몬스터 데이터가 들어갈 페이지입니다.
      </div>

      <div className={'flex gap-[4px]'}>
        {raids.map((raid) => {
          return (
            <div
              key={createKey()}
              className={
                'cursor-pointer border border-gray-800 shadow-md shadow-gray-500 rounded-sm'
              }
              onClick={() => {
                setSelectedRaid(raid)
              }}
            >
              <img className={'w-[200px]'} src={raid.titleThumbnail} />
              <div className={'text-gray-700 text-[14px] font-bold'}>
                {raid.name}
              </div>
            </div>
          )
        })}
      </div>

      {selectedRaid && (
        <div className={'mt-[10px] flex flex-col'}>
          <div className={'w-full'}>
            <div className={'text-start text-[24px] font-bold text-gray-700'}>
              {selectedRaid.name}
            </div>
            <hr className={'border-gray-500 my-[6px]'} />
            <div className={'flex flex-row gap-[4px]'}>
              {selectedRaid.levels.map((level) => {
                return (
                  <div
                    key={createKey()}
                    className={`border border-gray-600 px-[10px] cursor-pointer
                    ${selectedLevel?.name === level.name ? 'bg-green-500 text-white border-green-500' : 'bg-white'}`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level.name}
                  </div>
                )
              })}
            </div>
            <div className={'text-start'}>
              <div>
                <div>일반 보상</div>
                <div className={'flex justify-start items-center gap-[4px]'}>
                  {[1, 2, 3, 4].map(() => {
                    return (
                      <div
                        key={createKey()}
                        className={'text-[10px] w-[40px] h-[40px] border'}
                      >
                        Empty
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <div>명성 보상</div>
                <div className={'flex justify-start items-center gap-[4px]'}>
                  {[1, 2, 3, 4].map(() => {
                    return (
                      <div
                        key={createKey()}
                        className={'text-[10px] w-[40px] h-[40px] border'}
                      >
                        Empty
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <hr className={'border-gray-300 border-dashed my-[6px]'} />
            {selectedLevel && (
              <div>
                <div className={'text-start py-[10px]'}>
                  {selectedLevel.desc}
                </div>
                <div className={'text-start flex border border-gray-800'}>
                  {selectedLevel.parts.map((part, pIndex) => {
                    return (
                      <div
                        key={createKey()}
                        className={`flex-1 border-gray-800 ${pIndex && 'border-l'}`}
                      >
                        <div className={'inline-block w-full'}>
                          <div
                            className={
                              'text-[20px] flex items-center gap-[4px] justify-center w-full bg-gray-400 text-white font-bold'
                            }
                          >
                            {part.element && (
                              <img
                                className={'w-[24px]'}
                                src={`/img/etc/${part.element}-type.png`}
                              />
                            )}
                            {part.name}
                          </div>
                          <div
                            className={
                              'text-[14px] border-y border-dashed border-gray-800 px-[10px]'
                            }
                          >
                            <div>레벨: {part.level}</div>
                            <div>체력: {part.life?.toLocaleString()}</div>
                            <div>물리 공격력: {part.damageOfPhysical}</div>
                            <div>마법 공격력: {part.damageOfSpell}</div>
                            <div>회피: {part.evade}</div>
                            <div>물리 방어력: {part.armorOfPhysical}</div>
                            <div>마법 방어력: {part.armorOfSpell}</div>
                          </div>
                        </div>
                        <div className={'p-[10px]'}>
                          {part.skills.map((skill, index) => {
                            return (
                              <div
                                key={createKey()}
                                className={'text-[16px] py-0'}
                              >
                                {index !== 0 && (
                                  <hr
                                    className={
                                      'border-dashed border-gray-400 my-[4px]'
                                    }
                                  />
                                )}
                                <div>
                                  <div>{skill.name}</div>
                                  <div>{skill.desc}</div>
                                </div>
                              </div>
                            )
                          })}
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
