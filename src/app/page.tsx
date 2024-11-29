'use client'
import createKey from '@/app/services/key-generator'
import { MACardDict, MAGrade, MAJobKind, MASkillType } from '@/app/const/cards'
import { useEffect, useState } from 'react'
import _ from 'lodash'

type CheckBoxGroup = {
  [key: string]: boolean
}

export default function Home() {
  const costs = [5, 4, 3, 2, 1]
  const [checkedCosts, setCheckedCosts] = useState<CheckBoxGroup>(
    costs.reduce((acc, costNumber) => ({ ...acc, [costNumber]: true }), {}),
  )

  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(MAGrade).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedJobKinds, setCheckedJobKinds] = useState<CheckBoxGroup>(
    Object.keys(MAJobKind).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedSkillTypes, setCheckedSkillTypes] = useState<CheckBoxGroup>(
    Object.keys(MASkillType).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {},
    ),
  )

  const handleChangeCost = (event: any) => {
    const { name, checked } = event.target
    setCheckedCosts((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeGrade = (event: any) => {
    const { name, checked } = event.target
    setCheckedGrades((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeJobKind = (event: any) => {
    const { name, checked } = event.target
    setCheckedJobKinds((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeSkillType = (event: any) => {
    const { name, checked } = event.target
    setCheckedSkillTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div>
      <div className={'todo-w-[1300px] m-auto'}>
        <div className={'w-[900px] text-center m-auto'}>
          <div className={'relative text-[40px] font-bold my-[10px]'}>
            카드 목록
            <div>정렬 및 필터기능은 시간날때 업뎃할게여..</div>
          </div>
          <div className={'flex flex-col items-start justify-start'}>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>스킬 유형</div>
              <div className={'flex items-center gap-[4px]'}>
                {Object.keys(MASkillType).map((key) => {
                  return (
                    <label
                      className="flex items-center cursor-pointer select-none px-[4px]"
                      key={createKey()}
                    >
                      <input
                        type="checkbox"
                        className="flex border-2 rounded-md border-blue-200"
                        name={key}
                        checked={checkedSkillTypes[key]}
                        onChange={handleChangeSkillType}
                      />
                      <div>{key}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>직업 유형</div>
              <div className={'flex items-center gap-[4px]'}>
                {Object.keys(MAJobKind).map((key) => {
                  return (
                    <label
                      className="flex items-center cursor-pointer select-none px-[4px]"
                      key={createKey()}
                    >
                      <input
                        type="checkbox"
                        className="flex border-2 rounded-md border-blue-200"
                        name={key}
                        checked={checkedJobKinds[key]}
                        onChange={handleChangeJobKind}
                      />
                      <div>{key}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>등급</div>
              <div className={'flex items-center gap-[4px]'}>
                {Object.keys(MAGrade).map((grade) => {
                  return (
                    <label
                      className="flex items-center cursor-pointer select-none px-[4px]"
                      key={createKey()}
                    >
                      <input
                        type="checkbox"
                        className="flex border-2 rounded-md border-blue-200"
                        name={grade}
                        checked={checkedGrades[grade]}
                        onChange={handleChangeGrade}
                      />
                      <div>{grade}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>코스트</div>
              <div className={'select-none flex items-center gap-[4px]'}>
                {costs.map((key: any) => {
                  return (
                    <label
                      key={createKey()}
                      className="flex items-center cursor-pointer select-none px-[4px]"
                    >
                      <input
                        type="checkbox"
                        className="flex border-2 rounded-md border-blue-200"
                        name={key}
                        checked={checkedCosts[key + '']}
                        onChange={handleChangeCost}
                      />
                      <div>{key}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className={'flex justify-start bg-gray-500 opacity-20'}>
              <div className={'w-[100px] flex justify-start'}>원소 속성</div>
              <div className={'flex items-center gap-[4px]'}>
                {'불/얼음/바람/빛/어둠'.split('/').map((grade) => {
                  return (
                    <label
                      className="flex items-center cursor-pointer select-none px-[4px]"
                      key={createKey()}
                    >
                      <input
                        type="checkbox"
                        className="flex border-2 rounded-md border-blue-200"
                      />
                      <div>{grade}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <div className={'flex justify-start bg-gray-500 opacity-20'}>
              <div className={'w-[100px] flex justify-start'}>스킬 효과</div>
              <div className={'flex items-center gap-[4px]'}>
                {'도발/기절/카드 드로우/정화/제거/도발 무시/보호막/봉인/회피/성검/코스트'
                  .split('/')
                  .map((grade) => {
                    return (
                      <label
                        className="flex items-center cursor-pointer select-none px-[4px]"
                        key={createKey()}
                      >
                        <input
                          type="checkbox"
                          className="flex border-2 rounded-md border-blue-200"
                        />
                        <div>{grade}</div>
                      </label>
                    )
                  })}
              </div>
            </div>
          </div>
          <hr className={'my-[10px] border-gray-800'} />
          <MACardList
            checkedCosts={checkedCosts}
            checkedGrades={checkedGrades}
            checkedJobKinds={checkedJobKinds}
            checkedSkillTypes={checkedSkillTypes}
          />
        </div>
      </div>
    </div>
  )
}

function MACardList({
  checkedCosts,
  checkedGrades,
  checkedJobKinds,
  checkedSkillTypes,
}: any) {
  const TOTAL_CARDS_COUNT = 92
  const [cards, setCards] = useState<any>([])

  useEffect(() => {
    setCards(
      new Array(TOTAL_CARDS_COUNT).fill(1).map((key, index) => {
        const number = index + 1
        const card = MACardDict[number]

        const validCosts: string[] = _.keys(_.pickBy(checkedCosts, Boolean))
        const isValidCost = validCosts.includes(card.cost + '')

        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(card.grade)

        const validJobKinds: string[] = _.keys(
          _.pickBy(checkedJobKinds, Boolean),
        )
        const isValidJobKind = validJobKinds.includes(card.jobKind + '')

        const validSkillTypes: string[] = _.keys(
          _.pickBy(checkedSkillTypes, Boolean),
        )
        const isValidSkillType = validSkillTypes.includes(card.skillType)

        return isValidCost && isValidGrade && isValidJobKind && isValidSkillType
      }),
    )
  }, [checkedCosts, checkedGrades, checkedJobKinds, checkedSkillTypes])

  return (
    <div className={'flex flex-col items-start'}>
      <div
        className={
          'bg-white border-gray-400 border flex px-[10px] rounded font-bold'
        }
      >
        {cards.filter((data: any) => !!data).length}/{TOTAL_CARDS_COUNT}
      </div>
      <div
        className={
          'flex flex-wrap gap-[4px] justify-center bg-white border-gray-300 border-x border-y rounded-md py-[12px]'
        }
      >
        {cards.map((key: any, index: number) => {
          if (key === true)
            return <MACardBox number={index + 1} key={createKey()} />
          else return <></>
        })}
      </div>
    </div>
  )
}

function MACardBox({ number }: any) {
  return (
    <div
      key={createKey()}
      className={'inline-block bg-gray-300 rounded p-[4px] shadow-md'}
    >
      <img className="w-[100px]" src={`/img/cards/${number}.png`} />
      <div className={'text-[14px] font-medium w-[100px] truncate'}>
        {MACardDict[number].name}
      </div>
    </div>
  )
}
