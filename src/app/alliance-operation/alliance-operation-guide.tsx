export function AllianceOperationGuide() {
  return (
    <div>
      <div className="text-[24px] font-bold">연합 작전</div>
      <div className="mb-[10px]">
        <hr className="my-[6px]" />
        <div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-10 w-[300px] text-white p-[4px] text-[16px]">
            보스 로테이션
          </div>
          <div className="p-[5px]">
            연합 작전의 보스는 며칠 간격으로 변경됩니다. 오프닐은 매일 도전할 수 있으나 폰 데어 탄,
            요르문간드, 중앙 시스템은 3일에 한 번 교체됩니다.
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-10 w-[300px] text-white p-[4px] text-[16px]">
            스테이지 실패
          </div>
          <div className="p-[5px]">
            연합 작전은 실패해도 괜찮습니다. 실패 결산 후 절반의 정신력이 반환되기 때문입니다.
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-10 w-[300px] text-white p-[4px] text-[16px]">
            강제 종료
          </div>
          <div className="p-[5px]">
            파티원을 포기하지 마세요. 전투가 가능한데도 전투를 강제 종료하는 경우 정신력이 반환되지
            않습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
