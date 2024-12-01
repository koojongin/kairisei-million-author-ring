'use client'
import { useRouter } from 'next/navigation'

export default function MainSideBar() {
  const router = useRouter()

  return (
    <div
      className={
        'border-x border-gray-200 h-full p-[10px] text-[16px] flex flex-col cursor-pointer text-gray-700 font-bold'
      }
    >
      <div className={'hover:underline'} onClick={() => router.push('/card')}>
        카드 목록
      </div>
      <div className={'hover:underline'} onClick={() => router.push('/gatcha')}>
        가챠 시뮬
      </div>
      <div
        className={'hover:underline'}
        onClick={() => router.push('/update-log')}
      >
        업데이트 로그
      </div>
    </div>
  )
}
