import { RECRUITING_GUILDS } from '@/app/guild-recruitment/guild-data'
import createKey from '@/app/services/key-generator'
import Link from 'next/link'

export default function GuildRecruitmentPage() {
  const tdCss = 'border-b border-gray-400 text-center h-[40px] px-[10px]'
  return (
    <div>
      <div className="mb-[10px] text-red-600">
        <div>* 출처를 눌러 링크된 글 내용을 확인하고 신청해주세요.</div>
        <div>
          * 물음표로 내용이 비워진 곳은 다른 서버 길드(제가 카멜롯서버)는 확인 할 수가 없어서
          물음표입니다.
        </div>
      </div>

      <table className="table-auto border border-gray-400">
        <thead>
          <tr>
            <th className={tdCss}>ID</th>
            <th className={tdCss}>이름</th>
            <th className={tdCss}>서버</th>
            <th className={tdCss}>길드장</th>
            <th className={tdCss}>최소 레벨</th>
            <th className={tdCss}>허가 필요</th>
            <th className={tdCss}>출처</th>
          </tr>
        </thead>
        <tbody>
          {RECRUITING_GUILDS.map((guild) => {
            return (
              <tr key={createKey()} className="">
                <td className={tdCss}>{guild.id}</td>
                <td className={tdCss}>{guild.name}</td>
                <td className={tdCss}>{guild.server}</td>
                <td className={tdCss}>{guild.leader}</td>
                <td className={tdCss}>{guild.reqLevel ? guild.reqLevel : '?'}</td>
                <td className={tdCss}>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {guild.isNeedApprovement
                    ? 'O'
                    : guild.isNeedApprovement !== undefined
                      ? 'X'
                      : '?'}
                </td>
                <td className={tdCss}>
                  {guild.link && (
                    <Link href={guild.link} target="_blank">
                      [바로가기]
                    </Link>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
