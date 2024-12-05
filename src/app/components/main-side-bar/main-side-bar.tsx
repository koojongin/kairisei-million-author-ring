'use client'

import { useRouter } from 'next/navigation'

export default function MainSideBar() {
  const router = useRouter()

  const menuCss = ` hover:bg-gray-200 border border-l-0 border-gray-400 px-[7px] py-[3px]`
  return (
    <div className="py-[10px] text-[15px] flex cursor-pointer">
      <div className={`border-l-[1px]${menuCss}`} onClick={() => router.push('/card')}>
        카드 목록
      </div>
      <div className={menuCss} onClick={() => router.push('/alliance-operation')}>
        연합 작전
      </div>
      <div className={menuCss} onClick={() => router.push('/gatcha')}>
        가챠 시뮬
      </div>
      <div className={menuCss} onClick={() => router.push('/rd')}>
        추천 덱
      </div>
      <div className={menuCss} onClick={() => router.push('/update-log')}>
        업데이트 로그
      </div>
    </div>
  )
}
