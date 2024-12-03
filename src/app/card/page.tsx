'use client'

import { useState } from 'react'
import createKey from '@/app/services/key-generator'
import { MAElementType, MAGrade, MAJobKind, MASkillType } from '@/app/const/cards'
import { MACardList } from '@/app/card/ma-card-list'

type CheckBoxGroup = {
  [key: string]: boolean
}

export default function Home() {
  const costs = [5, 4, 3, 2, 1]
  const [checkedCosts, setCheckedCosts] = useState<CheckBoxGroup>(
    costs.reduce((acc, costNumber) => ({ ...acc, [costNumber]: true }), {}),
  )

  const [checkedElementTypes, setCheckedElementTypes] = useState<CheckBoxGroup>(
    Object.keys(MAElementType).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(MAGrade).reduce((acc, key) => ({ ...acc, [key]: key === MAGrade.MR }), {}),
  )

  const [checkedJobKinds, setCheckedJobKinds] = useState<CheckBoxGroup>(
    Object.keys(MAJobKind).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedSkillTypes, setCheckedSkillTypes] = useState<CheckBoxGroup>(
    Object.keys(MASkillType).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
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
  //
  const handleChangeElementType = (event: any) => {
    const { name, checked } = event.target
    setCheckedElementTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div className="">
      <div className="text-[14px] text-red-400 font-medium flex justify-start">
        * 완성된 데이터가 아닙니다. 틀리거나 빠진 부분이 있다면 제보부탁드립니다
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">스킬 유형</div>
          <div className="flex items-center gap-[4px]">
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
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">직업 유형</div>
          <div className="flex items-center gap-[4px]">
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
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">등급</div>
          <div className="flex items-center gap-[4px]">
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
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">코스트</div>
          <div className="select-none flex items-center gap-[4px]">
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
                    checked={checkedCosts[`${key}`]}
                    onChange={handleChangeCost}
                  />
                  <div>{key}</div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">원소 속성</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MAElementType).map((key) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={key}
                    checked={checkedElementTypes[key]}
                    onChange={handleChangeElementType}
                  />
                  <div>{key}</div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start bg-gray-500 opacity-20">
          <div className="w-[100px] flex justify-start">스킬 효과</div>
          <div className="flex items-center gap-[4px]">
            {'도발/기절/카드 드로우/정화/제거/도발 무시/보호막/봉인/회피/성검/코스트'
              .split('/')
              .map((grade) => {
                return (
                  <label
                    className="flex items-center cursor-pointer select-none px-[4px]"
                    key={createKey()}
                  >
                    <input type="checkbox" className="flex border-2 rounded-md border-blue-200" />
                    <div>{grade}</div>
                  </label>
                )
              })}
          </div>
        </div>
      </div>
      <hr className="my-[10px] border-gray-800" />
      <MACardList
        checkedCosts={checkedCosts}
        checkedGrades={checkedGrades}
        checkedJobKinds={checkedJobKinds}
        checkedSkillTypes={checkedSkillTypes}
        checkedElementTypes={checkedElementTypes}
      />
    </div>
  )
}
