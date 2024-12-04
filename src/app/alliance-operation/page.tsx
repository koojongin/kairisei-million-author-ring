'use client'

import { useEffect, useState } from 'react'
import {
  MADifficulty,
  MARaid,
  MARaidAttribute,
  MARaidLevel,
  MARaidRewardType,
} from '@/app/services/raid/raid.interface'
import createKey from '@/app/services/key-generator'
import { getElementTypeEn } from '@/app/services/card.translate'
import { JORMUNGANDR } from '@/app/services/raid/monster.jormungandr'
import { PHONE_DARE_TAN } from '@/app/services/raid/monster.phone-dare-tan'
import { OFFNIL } from '@/app/services/raid/monster.offnil'
import { PHONE_ASHE } from '@/app/services/raid/monster.phone-ashe'
import { RaidRewardList } from '@/app/alliance-operation/reward-box'
import { AllianceOperationGuide } from '@/app/alliance-operation/alliance-operation-guide'
import { RaidDetail } from '@/app/alliance-operation/raid-detail'
import { RaidListContainer } from '@/app/alliance-operation/raid-list-container'

export default function AllianceOperationPage() {
  const raids: MARaid[] = [OFFNIL, PHONE_DARE_TAN, JORMUNGANDR, PHONE_ASHE]
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

      <RaidListContainer raids={raids} setRaid={setSelectedRaid} />

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
