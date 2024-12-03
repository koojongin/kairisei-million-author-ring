'use client'

import { useRouter } from 'next/navigation'

export default function MainHeaderBar() {
  const router = useRouter()
  return (
    <div
      className="flex items-center text-white gap-[10px] cursor-pointer"
      onClick={() => router.push('https://arca.live/b/millionarthur')}
    >
      <img className="w-[30px] rounded-full border-[2px]" src="/img/arca.svg" />
      괴리성 밀리언아서 링 채널로 이동
    </div>
  )
}
