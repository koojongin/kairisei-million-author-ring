import createKey from '@/app/services/key-generator'
import { MACardNumber } from '@/app/const/ma-card-number.enum'

export default function Home() {
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
                {'물/마/지/수/약/치'.split('/').map((grade) => {
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
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>직업 유형</div>
              <div className={'flex items-center gap-[4px]'}>
                {'수호/강습/지원'.split('/').map((grade) => {
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
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>등급</div>
              <div className={'flex items-center gap-[4px]'}>
                {'N/R/SR/UR/MR'.split('/').map((grade) => {
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
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>코스트</div>
              <div className={'select-none'}>
                <div className={'flex items-center gap-[4px]'}>
                  <label className="flex items-center cursor-pointer select-none px-[4px]">
                    <input
                      type="checkbox"
                      // checked={dropItem.isTopRankReward}
                      className="flex border-2 rounded-md border-blue-200"
                      // onChange={(e) => {
                      //   const newDropTable = { ...dropTable }
                      //   newDropTable.items[index as number].isTopRankReward =
                      //     e.target.checked
                      //   setDropTable(newDropTable)
                      // }}
                    />
                    <div>1</div>
                  </label>

                  <label className="flex items-center cursor-pointer select-none px-[4px]">
                    <input
                      type="checkbox"
                      className="flex border-2 rounded-md border-blue-200"
                    />
                    <div>2</div>
                  </label>

                  <label className="flex items-center cursor-pointer select-none px-[4px]">
                    <input
                      type="checkbox"
                      className="flex border-2 rounded-md border-blue-200"
                    />
                    <div>3</div>
                  </label>

                  <label className="flex items-center cursor-pointer select-none px-[4px]">
                    <input
                      type="checkbox"
                      className="flex border-2 rounded-md border-blue-200"
                    />
                    <div>4</div>
                  </label>

                  <label className="flex items-center cursor-pointer select-none px-[4px]">
                    <input
                      type="checkbox"
                      className="flex border-2 rounded-md border-blue-200"
                    />
                    <div>5</div>
                  </label>
                </div>
              </div>
            </div>
            <div className={'flex justify-start'}>
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
            <div className={'flex justify-start'}>
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
          <MACardList />
        </div>
      </div>
    </div>
  )
}

function MACardList({}: any) {
  return (
    <div
      className={
        'flex flex-wrap gap-[4px] justify-center bg-white border-gray-300 border-x border-y rounded-md pt-[12px]'
      }
    >
      {new Array(92).fill(1).map((key, index) => {
        const number = index + 1
        // eslint-disable-next-line react/jsx-key
        return <MACardBox number={number} />
      })}
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
      <div className={'text-[14px] font-medium w-[100px]'}>
        {MACardNumber[number]}
      </div>
    </div>
  )
}
