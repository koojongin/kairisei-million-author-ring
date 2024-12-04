import React, { Dispatch, SetStateAction } from 'react'
import createKey from '@/app/services/key-generator'
import { MARaid } from '@/app/services/raid/raid.interface'

export function RaidListContainer({
  raids,
  setRaid,
}: {
  raids: MARaid[]
  setRaid: Dispatch<SetStateAction<MARaid | undefined>>
}) {
  return (
    <div className="flex gap-[4px]">
      {raids.map((raid) => (
        <div
          key={createKey()}
          className="cursor-pointer border border-gray-800 shadow-md shadow-gray-500 rounded-sm"
          onClick={() => {
            setRaid(raid)
          }}
        >
          <img className="w-[200px]" src={raid.titleThumbnail} />
          <div className="text-gray-700 text-[16px] font-bold p-[4px] flex justify-center items-center">
            {raid.name}
          </div>
        </div>
      ))}
    </div>
  )
}
