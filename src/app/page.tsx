import createKey from '@/app/services/key-generator'
import { MACardNumber } from '@/app/const/ma-card-number.enum'

export default function Home() {
  return (
    <div>
      <div className={'todo-w-[1300px] m-auto'}>
        <div className={'w-[900px] text-center m-auto'}>
          <div className={'relative text-[40px] font-bold my-[10px]'}>
            카드 목록
          </div>
          <div className={'flex flex-col items-start justify-start'}>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>스킬 유형</div>
              <div>물/마/지/수/약/치</div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>직업 유형</div>
              <div>수호/강습/지원</div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>등급</div>
              <div>N/R/SR/UR/MR</div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>코스트</div>
              <div>1/2/3/4/5</div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>원소 속성</div>
              <div>불/얼음/바람/빛/어둠</div>
            </div>
            <div className={'flex justify-start'}>
              <div className={'w-[100px] flex justify-start'}>스킬 효과</div>
              <div>
                도발/기절/카드 드로우/정화/제거/도발
                무시/보호막/봉인/회피/성검/코스트
              </div>
            </div>
          </div>
          <MACardList />
        </div>
      </div>
    </div>
  )
}

export function MACardList() {
  return (
    <div
      className={
        'flex flex-wrap gap-[4px] justify-center bg-white border-gray-300 border-x border-y rounded-md pt-[12px]'
      }
    >
      {new Array(92).fill(1).map((key, index) => {
        return <MACardBox number={index + 1} />
      })}
    </div>
  )
}

export function MACardBox({ number }: { number: number }) {
  return (
    <div
      key={createKey()}
      className={'inline-block bg-gray-300 rounded p-[4px] shadow-md'}
    >
      <img className="w-[100px]" src={`/img/cards/${number}.png`} />
      <div className={'text-[12px] font-bold w-[100px]'}>
        {MACardNumber[number]}
      </div>
    </div>
  )
}
