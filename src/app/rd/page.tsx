'use client'

import createKey from '@/app/services/key-generator'
import { EXPANDED_RECOMMENDATION_DECKS } from '@/app/rd/recommendation-decks'
import { ExpandedRecommendationCardBox } from '@/app/rd/expanded-recommendation-card-box'
import { ExpandedRecommendationDeck, MAFieldType } from '@/app/rd/recommendation.interface'
import { MACharacter } from '@/app/const/cards'
import { useEffect, useState } from 'react'
import { CheckBoxGroup } from '@/app/services/ma.enum'
import _, { debounce } from 'lodash'

export default function RecommandationDeckPage() {
  const [decks, setDecks] = useState<ExpandedRecommendationDeck[]>(EXPANDED_RECOMMENDATION_DECKS)

  const [checkedCTypes, setCheckedCTypes] = useState<CheckBoxGroup>(
    Object.keys(MACharacter).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedFieldTypes, setCheckedFieldTypes] = useState<CheckBoxGroup>(
    Object.keys(MAFieldType).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [searchedDeckName, setSearchedDeckName] = useState('')

  const handleChangeCType = (event: any) => {
    const { name, checked } = event.target
    setCheckedCTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeFieldType = (event: any) => {
    const { name, checked } = event.target
    setCheckedFieldTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSearchedDeckNameChange = debounce((event: any) => {
    setSearchedDeckName(event.target.value)
  }, 300)

  useEffect(() => {
    setDecks([
      ...EXPANDED_RECOMMENDATION_DECKS.filter((deck) => {
        const validCTypes: string[] = _.keys(_.pickBy(checkedCTypes, Boolean))
        const isValidCType = validCTypes.includes(deck.characterName)

        const validFieldTypes: string[] = _.keys(_.pickBy(checkedFieldTypes, Boolean))
        const isValidFieldType = validFieldTypes.includes(deck.field)
        return (
          isValidCType &&
          isValidFieldType &&
          (deck.name.indexOf(searchedDeckName) >= 0 || searchedDeckName === '')
        )
      }),
    ])
  }, [checkedCTypes, checkedFieldTypes, searchedDeckName])

  return (
    <div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">캐릭터</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MACharacter).map((key) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={key}
                    checked={checkedCTypes[key]}
                    onChange={handleChangeCType}
                  />
                  <div>{key}</div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">덱 유형</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MAFieldType).map((key) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={key}
                    checked={checkedFieldTypes[key]}
                    onChange={handleChangeFieldType}
                  />
                  <div>{key}</div>
                </label>
              )
            })}
          </div>
        </div>

        <div className="mt-[5px]">
          <input
            className="border border-gray-400 min-w-[300px] p-[4px]"
            type="text"
            onChange={handleSearchedDeckNameChange}
            placeholder="검색할 덱 이름을 입력하세요."
          />
          {searchedDeckName && (
            <div className="text-gray-500 text-[14px]">"{searchedDeckName}" 검색됨.</div>
          )}
        </div>
      </div>

      <hr className="border-gray-300 my-[10px]" />

      {/* DeckLists */}
      <div>
        {decks.map((deck) => {
          return (
            <div key={createKey()}>
              <ExpandedRecommendationCardBox deck={deck} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
