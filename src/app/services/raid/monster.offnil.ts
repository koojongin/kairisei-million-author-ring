import { MARaid } from '@/app/services/raid/raid.interface'
import { MAElementType, MAGrade } from '@/app/const/cards'
import { MAObjectType } from '@/app/services/ma.enum'

export const OFFNIL: MARaid = {
  titleThumbnail: '/img/raid/1.png',
  name: '오프닐',
  rewards: {
    초급: {
      normal: [
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 1, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 1, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 12, type: MAObjectType.ITEM, grade: MAGrade.UR }, // 치아리
        { number: 10, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 11, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
      fame: [
        { number: 31, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 33, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 34, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 27, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    중급: {
      normal: [
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 50, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 80, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 12, type: MAObjectType.ITEM, grade: MAGrade.UR }, // 치아리
        { number: 5, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 7, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 10, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 11, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
      fame: [
        { number: 31, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 33, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 34, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 27, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    상급: {
      normal: [
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 80, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 100, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 3, type: MAObjectType.ITEM, grade: MAGrade.UR },
        { number: 4, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 6, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 5, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 7, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.R },
      ],
      fame: [
        { number: 31, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 33, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 34, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 27, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    특급: {
      normal: [
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 100, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 160, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 3, type: MAObjectType.ITEM, grade: MAGrade.UR },
        { number: 4, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 6, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 5, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 7, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.R },
      ],
      fame: [
        { number: 31, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 33, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 34, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 27, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    초특급: {
      normal: [
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 150, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 200, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 3, type: MAObjectType.ITEM, grade: MAGrade.UR },
        { number: 4, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 6, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 5, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 7, type: MAObjectType.ITEM, grade: MAGrade.R },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.R },
      ],
      fame: [
        { number: 31, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 33, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 34, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 27, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 29, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
  },
  levels: [
    {
      name: '1단계',
      desc: '화염과 독을 내뿜는 드래곤. 흙먼지 위를 기어 다니는 미천한 개미를 모두 업신여기고 있다.',
      parts: [
        {
          name: '오른쪽 발',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 63036,
              damageOfPhysical: 3673,
              damageOfSpell: 68,
              regeneration: 68,
              armorOfPhysical: 849,
              armorOfSpell: 772,
            },
            특급: {
              element: MAElementType.불,
              level: 56,
              life: 54590,
              damageOfPhysical: 3181,
              damageOfSpell: 59,
              regeneration: 59,
              armorOfPhysical: 735,
              armorOfSpell: 669,
            },
          },
          skills: [
            {
              name: '격노의 상처 : 강',
              desc: '적한 명에게 170% 만큼 물리 피해를 1회 입힙니다. 아군 전체에게 용감을(를) 3턴 동안2스택 부여하고 흡수의 뿌리을(를) 2스택 부여합니다. 아군 전체가 보유한 용감 3스택마다 1스택을 추가 부여합니다.',
            },
            {
              name: '붕괴',
              desc: '격파될 시 오프닐 본체의 HP를 자신의 HP의 100%만큼 감소시킵니다.',
            },
          ],
        },
        {
          name: '오프닐',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 238758,
              damageOfPhysical: 74,
              damageOfSpell: 3290,
              regeneration: 74,
              armorOfPhysical: 1209,
              armorOfSpell: 1864,
            },
            특급: {
              element: MAElementType.불,
              level: 56,
              life: 206769,
              damageOfPhysical: 64,
              damageOfSpell: 2851,
              regeneration: 64,
              armorOfPhysical: 1044,
              armorOfSpell: 1610,
            },
          },
          skills: [
            {
              name: '용의 불꽃 : 강',
              desc: '적 한 명에게 100%만큼 마법 피해를 1회 입히고, 붕괴을(를) 3턴 동안 2스택 부여합니다. 붕괴 미보유 시 1스택을 추가 부여합니다.',
            },
            {
              name: '용의 숨결 : 강',
              desc: '적 전체에게 120%만큼 마법 피해를 3회 입히고, 대상이 보유한 붕괴 1스택마다 흡수의 뿌리을(를) 2스택 부여합니다.',
            },
            {
              name: '잘못된 보답',
              desc: '페이즈 전환 시 적 전체에게 150%만큼 마법 피해를 3회 입히고, 흡수의 뿌리을(를) 10스택 부여합니다. 왼쪽 발과 오른쪽 발이 격파되지 않은 경우 10스택을 추가 부여합니다.',
            },
          ],
        },
        {
          name: '왼쪽 발',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 68598,
              damageOfPhysical: 68,
              damageOfSpell: 3467,
              regeneration: 68,
              armorOfPhysical: 772,
              armorOfSpell: 849,
            },
            특급: {
              element: MAElementType.불,
              level: 56,
              life: 59407,
              damageOfPhysical: 59,
              damageOfSpell: 3002,
              regeneration: 59,
              armorOfPhysical: 669,
              armorOfSpell: 735,
            },
          },
          skills: [
            {
              name: '파열의 강습',
              desc: '적 전체에게 70% 만큼 마법 피해를 1회 입히고, 흡수의 뿌리을(를) 3스택 부여합니다.',
            },
            {
              name: '붕괴',
              desc: '격파될 시 오프닐 본체의 HP를 자신의 HP의 100%만큼 감소시킵니다.',
            },
          ],
        },
      ],
    },

    {
      name: '2단계',
      desc: '분노한 포이즌 드래곤. 기만이라는 죄를 저지른 모든 개미를 짓뭉개려고 한다.',
      parts: [
        {
          name: '오른쪽 발',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 63036,
              damageOfPhysical: 3673,
              damageOfSpell: 68,
              regeneration: 68,
              armorOfPhysical: 849,
              armorOfSpell: 772,
            },
            특급: {
              element: MAElementType.불,
              level: 62,
              life: 60220,
              damageOfPhysical: 3509,
              damageOfSpell: 65,
              regeneration: 65,
              armorOfPhysical: 811,
              armorOfSpell: 738,
            },
          },
          skills: [
            {
              name: '격노의 상처 : 강',
              desc: '적한 명에게 170% 만큼 물리 피해를 1회 입힙니다. 아군 전체에게 용감을(를) 3턴 동안 3스택 부여합니다. 대상에게는 흡수의 뿌리을(를) 2스택 부여합니다. 아군 전체가 보유한 용감 3스택마다 1스택을 추가 부여합니다.',
            },
            {
              name: '붕괴',
              desc: '격파될 시 오프닐 본체의 HP를 자신의 HP의 100%만큼 감소시킵니다.',
            },
          ],
        },
        {
          name: '오프닐',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 238758,
              damageOfPhysical: 74,
              damageOfSpell: 3290,
              regeneration: 74,
              armorOfPhysical: 1209,
              armorOfSpell: 1864,
            },
            특급: {
              element: MAElementType.어둠,
              level: 62,
              life: 330436,
              damageOfPhysical: 71,
              damageOfSpell: 3624,
              regeneration: 71,
              armorOfPhysical: 639,
              armorOfSpell: 852,
            },
          },
          skills: [
            {
              name: '용의 독 : 강',
              desc: '적한 명에게 100% 만큼 마법 피해를 1회 입히고, 붕괴을(를) 3턴 동안 2스택 부여합니다. 붕괴 미보유 시 3스택을 추가 부여합니다. 흡수의 뿌리을(를) 2스택 부여합니다.',
            },
            {
              name: '부식 분출 : 강',
              desc: '적한 명에게 100% 만큼 마법 피해를 1회 입히고, 붕괴을(를) 3턴 동안 2스택 부여합니다. 붕괴 미보유 시 3스택을 추가 부여합니다. 흡수의 뿌리을(를) 2스택 부여합니다적 전체에게 120%만큼 마법 피해를 3회 입히고, 붕괴을(를) 2스택 부여합니다. 대상이 붕괴 1스택 보유 시마다 흡수의 뿌리을(를) 2스택 부여합니다..',
            },
            {
              name: '저주 청산',
              desc: '적 전체에게 70% 만큼 마법 피해를 1회 입힙니다. 흡수의 뿌리을(를) 스택 부여합니다. 아군이 이번 턴에 부여한 흡수의 뿌리 1스택당 자신은 드래곤의 분노을(를) 1스택 획득합니다.',
            },
            {
              name: '파괴적인 보호',
              desc: '적 전체에게 190%만큼 마법 피해를 3회 입히고, 대상이 흡수의 뿌리 10스택 보유 시 받는 피해를 50% 증가시킵니다.',
            },
          ],
        },
        {
          name: '왼쪽 발',
          attributes: {
            초급: {
              element: MAElementType.불,
              level: 65,
              life: 68598,
              damageOfPhysical: 68,
              damageOfSpell: 3467,
              regeneration: 68,
              armorOfPhysical: 772,
              armorOfSpell: 849,
            },
            특급: {
              element: MAElementType.불,
              level: 62,
              life: 65534,
              damageOfPhysical: 65,
              damageOfSpell: 3312,
              regeneration: 65,
              armorOfPhysical: 738,
              armorOfSpell: 811,
            },
          },
          skills: [
            {
              name: '파열의 강습: 절',
              desc: '적 전체에게 70% 만큼 마법 피해를 1회 입히고, 붕괴을(를) 3턴 동안 2스택 부여합니다. 흡수의 뿌리을(를) 1스택 부여합니다. 대상이 붕괴 스택 보유 시마다 1스택을 추가 부여합니다.',
            },
            {
              name: '붕괴',
              desc: '격파될 시 오프닐 본체의 HP를 자신의 HP의 100%만큼 감소시킵니다.',
            },
          ],
        },
      ],
    },
  ],
}
