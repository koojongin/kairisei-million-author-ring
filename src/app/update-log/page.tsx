export default function UpdateLogPage() {
  return (
    <div className="w-full flex shadow">
      <div className="text-[14px] text-gray-800 flex flex-col items-start justify-start [&>div]:flex [&>div]:flex-col [&>div]:p-[10px] bg-white/70 [&>div]:items-start w-full">
        <div>
          <div className="font-bold">2024-12-03 17:43:03</div>
          <div className="flex flex-col items-start">
            <div>이미지 마우스 유지시 카드 전체 이름 보이도록 수정</div>
            <div>페이지 레이아웃 구조 세로형으로 변경</div>
          </div>
        </div>

        <div>
          <div className="font-bold">2024-12-02 14:42:03</div>
          <div className="flex flex-col items-start">
            <div>빠져있던 카드 추가</div>
            <div>가챠 시뮬 추가</div>
          </div>
        </div>

        <div>
          <div className="font-bold">2024-12-01 16:05:03</div>
          <div className="flex flex-col items-start">
            <div>카드 목록 이미지 작게 보기 기능 추가</div>
            <div>빠져있던 카드 4개 추가(더 있을 수 있음)</div>
            <div>사이드 메뉴 추가</div>
          </div>
        </div>

        <hr className="border-gray-400 border-dotted w-full" />
        <div>
          <div className="font-bold">2024-11-30 03:21:03</div>
          <div className="flex flex-col items-start">
            <div>2차 배포</div>
            <div>모든 카드목록(이 아닐수도 있음) 등록</div>
            <div>카드 이름,코스트,등급,유형,스킬 유형 추가</div>
          </div>
        </div>

        <hr className="border-gray-400 border-dotted w-full" />
        <div>
          <div className="font-bold">2024-11-29 12:01:11</div>
          <div className="flex flex-col items-start">
            <div>최초 배포</div>
            <div>약간의 카드 목록</div>
          </div>
        </div>
      </div>
    </div>
  )
}
