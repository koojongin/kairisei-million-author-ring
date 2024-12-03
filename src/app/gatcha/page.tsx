'use client'

import { useState } from 'react'
import { GATCHA_TITLES, GatchaTitle, getRandomCard } from '@/app/const/cards-gatcha'
import createKey from '@/app/services/key-generator'
import { MACardBox } from '@/app/components/card/ma-card-box'
import { CardImageSize } from '@/app/components/card/ma-card.enum'
import { MACard, MACardDict, MAGrade } from '@/app/const/cards'

export default function GatchaSimulatorPage() {
  const gatchaTitles = GATCHA_TITLES

  /* const a = [
    { a: '수호/빛/광기형 부패한 수호자' },
  ]
  const cards = Object.values(MACardDict)
  const test = {
    mr5: [],
    mr4: [],
    ur3: [],
    ur2: [],
    sr3: [],
    sr2: [],
    sr1: [],
    r: [],
    n: [],
  }
  const result = a.map((b) => {
    const str = b.a.split('/')
    const data = { job: str[0], type: str[1], name: str[2] }

    const cc = cards
      .map((c, index) => {
        if (c.name === data.name && c.jobKind === data.job) {
          if (c.grade === MAGrade.MR && c.star === 5) test.mr5.push(index + 1)
          if (c.grade === MAGrade.MR && c.star === 4) test.mr4.push(index + 1)
          if (c.grade === MAGrade.UR && c.star === 3) test.ur3.push(index + 1)
          if (c.grade === MAGrade.UR && c.star === 2) test.ur2.push(index + 1)
          if (c.grade === MAGrade.SR && c.star === 3) test.sr3.push(index + 1)
          if (c.grade === MAGrade.SR && c.star === 2) test.sr2.push(index + 1)
          if (c.grade === MAGrade.SR && c.star === 1) test.sr1.push(index + 1)
          if (c.grade === MAGrade.R) test.r.push(index + 1)
          if (c.grade === MAGrade.N) test.n.push(index + 1)
          return index + 1
        }
        return 0
      })
      .filter((d) => !!d)[0]
    return cc
  })

  console.log(test) */

  const [roledCount, setRoledCount] = useState(0)
  const [accumulatedCards, setAccumulatedCards] = useState<
    Array<MACard & { number: number }> | any
  >([])

  const [title, setTitle] = useState<GatchaTitle>()
  const [roledCards, setRoledCards] = useState<Array<MACard & { number: number }> | any>([])

  const roleCards = () => {
    if (!title) return alert('선택된 픽업이 없습니다.')
    const roledAmount = 10
    const selectedCards = new Array(roledAmount).fill(1).map(() => getRandomCard(title))

    const cards = selectedCards.map((cardNumber) => ({
      ...MACardDict[cardNumber!],
      number: cardNumber,
    }))
    setRoledCards(cards)
    setAccumulatedCards([...accumulatedCards, ...cards])
    setRoledCount(roledCount + roledAmount)
  }

  return (
    <div className="w-full">
      <div className="text-[24px] font-bold">가챠 시뮬레이터</div>
      <div className="text-start mb-[10px]">
        * 아래 픽업 목록중 하나를 클릭하여 선택 후 공명하세요. (현재 1개 밖에 없어서 극지의 여정
        클릭)
      </div>
      <div className="flex">
        {gatchaTitles.map((gatchaTitle) => {
          return (
            <div
              key={createKey()}
              className="cursor-pointer rounded overflow-hidden border-2 border-gray-400 flex items-center justify-center shadow-md shadow-gray-800"
              onClick={() => {
                setTitle(gatchaTitle)
              }}
            >
              <img className="w-[200px]" src={gatchaTitle.titleThumbnail} />
            </div>
          )
        })}
      </div>

      <hr className="my-[20px]" />
      {title && (
        <div className="text-start mt-[10px]">
          <div>
            <div className="font-bold text-[20px]">{title.name}</div>
          </div>

          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <div
                className="select-none cursor-pointer bg-gray-800 text-white px-[10px] py-[4px] rounded-full shadow-md shadow-gray-800 border-white border-2"
                onClick={() => roleCards()}
              >
                공명 10회
              </div>
              <div>
                <div>{roledCount.toLocaleString()}회 공명됨</div>
                <div className="flex gap-[4px] [&>div]:border [&>div]:border-gray-800 [&>div]:px-[4px] [&>div]:rounded">
                  <div>
                    【MR5성】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.MR && card.star === 5)
                      .length.toLocaleString()}
                  </div>
                  <div>
                    【MR4성】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.MR && card.star === 4)
                      .length.toLocaleString()}
                  </div>
                  <div>
                    【UR】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.UR)
                      .length.toLocaleString()}
                  </div>
                  <div>
                    【SR】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.SR)
                      .length.toLocaleString()}
                  </div>
                  <div>
                    【R】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.R)
                      .length.toLocaleString()}
                  </div>
                  <div>
                    【N】
                    {accumulatedCards
                      .filter((card: any) => card.grade === MAGrade.N)
                      .length.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap border p-[10px] justify-center">
              {roledCards?.length > 0 && (
                <div>
                  <div>뽑힌 카드 목록</div>
                  <div className="flex flex-wrap gap-[4px]">
                    {roledCards.map((card: any) => {
                      return (
                        <div key={createKey()}>
                          <MACardBox number={card.number} size={CardImageSize.LARGE} />
                        </div>
                      )
                    })}
                  </div>
                  <hr className="my-[10px]" />
                  <div className="mb-[10px]">
                    <div>
                      현재까지 뽑기로 누적된 카드 목록(
                      {accumulatedCards.length.toLocaleString()})
                    </div>
                    <div className="flex gap-[4px] [&>div]:border [&>div]:border-gray-800 [&>div]:px-[4px] [&>div]:rounded">
                      <div>
                        【MR5성】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.MR && card.star === 5)
                          .length.toLocaleString()}
                      </div>
                      <div>
                        【MR4성】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.MR && card.star === 4)
                          .length.toLocaleString()}
                      </div>
                      <div>
                        【UR】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.UR)
                          .length.toLocaleString()}
                      </div>
                      <div>
                        【SR】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.SR)
                          .length.toLocaleString()}
                      </div>
                      <div>
                        【R】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.R)
                          .length.toLocaleString()}
                      </div>
                      <div>
                        【N】
                        {accumulatedCards
                          .filter((card: any) => card.grade === MAGrade.N)
                          .length.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[4px]">
                    {accumulatedCards.map((card: any) => {
                      return (
                        <div key={createKey()}>
                          <MACardBox number={card.number} size={CardImageSize.XSMALL} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="border-gray-800 my-[20px]" />
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">UP 정보</div>
            <div className="flex flex-col gap-[15px]">
              {!title.up && <div>등록된 UP 정보 없음</div>}
              {title.up?.map((upData) => {
                return (
                  <div key={createKey()}>
                    <div className="border-b border-gray-400 border-dashed inline-block mb-[5px]">
                      확률UP - {upData.grade} {upData.star}성 등장 확률의 {upData.rate}%
                    </div>
                    <div className="flex flex-wrap gap-[4px]">
                      {upData.list.map((upDataCardNumber) => {
                        return (
                          <div key={createKey()}>
                            <MACardBox number={upDataCardNumber} size={CardImageSize.XSMALL} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <hr className="border-gray-800 my-[20px]" />
          <div>확률 정보</div>
          {title.list.map((list) => {
            return (
              <div key={createKey()} className="mb-[10px] border-b border-gray-600 border-dashed">
                <div className="flex items-center gap-[4px] mb-[8px]">
                  {MACardDict[list.cards[0]].grade && (
                    <div className="bg-gray-700 text-white">
                      【{MACardDict[list.cards[0]].grade}카드】
                    </div>
                  )}
                  <div className="font-bold">{list.rate}%</div>
                </div>
                <div className="flex flex-wrap">
                  {list.cards.map((card) => {
                    return (
                      <div key={createKey()}>
                        <MACardBox number={card} size={CardImageSize.XSMALL} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
