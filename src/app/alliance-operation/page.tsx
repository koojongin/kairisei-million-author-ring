'use client'

import { useEffect, useState } from 'react'
import { MADifficulty, MARaid, MARaidLevel } from '@/app/services/raid/raid.interface'
import { JORMUNGANDR } from '@/app/services/raid/monster.jormungandr'
import { PHONE_DARE_TAN } from '@/app/services/raid/monster.phone-dare-tan'
import { OFFNIL } from '@/app/services/raid/monster.offnil'
import { PHONE_ASHE } from '@/app/services/raid/monster.phone-ashe'
import { AllianceOperationGuide } from '@/app/alliance-operation/alliance-operation-guide'
import { RaidDetail } from '@/app/alliance-operation/raid-detail'
import { RaidListContainer } from '@/app/alliance-operation/raid-list-container'
import { UASAHA } from '@/app/services/raid/monster.uasaha'
import { KARATIN } from '@/app/services/raid/monster.karatin'
import { CENTER_SYSTEM } from '@/app/services/raid/monster.center-system'

export default function AllianceOperationPage() {
  const raids: MARaid[] = [
    OFFNIL,
    PHONE_DARE_TAN,
    JORMUNGANDR,
    PHONE_ASHE,
    UASAHA,
    KARATIN,
    CENTER_SYSTEM,
  ]
  const [selectedRaid, setSelectedRaid] = useState<MARaid>()
  const [selectedLevel, setSelectedLevel] = useState<MARaidLevel>()
  const [selectedDifficulty, setSelectedDifficulty] = useState<MADifficulty | string>(
    MADifficulty.중급,
  )

  useEffect(() => {
    if (!selectedRaid) return
    setSelectedLevel(selectedRaid.levels[0])
  }, [selectedDifficulty, selectedRaid])
  return (
    <div className="w-full text-gray-700">
      <div className="text-start mb-[10px]">
        추가중............... 연합 작전 몬스터 데이터가 들어갈 페이지입니다.
      </div>
      <AllianceOperationGuide />

      <RaidListContainer raids={raids} setSelectedRaid={setSelectedRaid} />

      {selectedRaid && (
        <RaidDetail
          level={selectedLevel}
          difficulty={selectedDifficulty}
          raid={selectedRaid}
          setDifficulty={setSelectedDifficulty}
          setLevel={setSelectedLevel}
        />
      )}
    </div>
  )
}
