export default function UpdateLogPage() {
  return (
    <div className={'w-full flex'}>
      <div
        className={
          'flex flex-col items-start justify-start [&>div]:flex [&>div]:flex-col [&>div]:p-[10px] bg-white/70 [&>div]:items-start w-full'
        }
      >
        <div>
          <div className={'font-bold'}>ㅇ</div>
          <div className={'flex flex-col items-start'}>ㅇㅇ</div>
        </div>

        <hr className={'border-gray-400 border-dotted w-full'} />
        <div>
          <div className={'font-bold'}>2024-11-30 03:21:03</div>
          <div className={'flex flex-col items-start'}>
            <div>2차 배포</div>
            <div>모든 카드목록(이 아닐수도 있음) 등록</div>
            <div>카드 이름,코스트,등급,유형,스킬 유형 추가</div>
          </div>
        </div>

        <hr className={'border-gray-400 border-dotted w-full'} />
        <div>
          <div className={'font-bold'}>2024-11-29 12:01:11</div>
          <div className={'flex flex-col items-start'}>
            <div>최초 배포</div>
            <div>약간의 카드 목록</div>
          </div>
        </div>
      </div>
    </div>
  )
}
