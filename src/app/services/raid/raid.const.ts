import { MARaid } from '@/app/services/raid/raid.interface'
import { MAElementType } from '@/app/const/cards'

export const OFFNIL: MARaid = {
  titleThumbnail: '/img/raid/1.png',
  name: '오프닐',
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

export const PHONE_DARE_TAN: MARaid = {
  titleThumbnail: '/img/raid/2.png',
  name: '폰 데어 탄',
  levels: [
    {
      name: '1단계',
      desc: '세스테스 제국 12군단의 지휘관. 늘 기사도 정신을 중시하며, 생사가 걸린 전장일지라도 승리를 위해서는 음모에 굴복하지 않는다.',
      parts: [
        {
          name: '팔보호대',
          attributes: {},
          skills: [
            {
              name: '충성의 격려 : 충',
              desc: '턴 종료 시 HP가 가장 적은 아군 한 명을 팔 보호대 회복량 250%만큼 치료합니다. 대상의 HP가 50% 미만일 시 회복량이 100% 증가합니다.',
            },
            {
              name: '격투의 수호',
              desc: '도발을 무시하고, 결투 대상에게 100%만큼 물리 피해를 2회 입힙니다.',
            },
            {
              name: '수호의 붕괴',
              desc: '격파될 시 자신의 HP 100% 만큼 폰 데어 탄 본체의 HP를 감소시킵니다.',
            },
          ],
        },
        {
          name: '폰 데어 탄',
          attributes: {},
          skills: [
            {
              name: '명예의 결투 : 충',
              desc: '이전 턴에 결투을(를) 보유하지 않은 적에게 피해를 받았다면, 이번 턴 시작 시 피해를 입힌 횟수가 가장 많은 대상이 결투 대상이 됩니다. 결투가 없는 적이 피해를 입힐 때마다 기사의 수칙을(를) 위반한 것으로 간주하여 배신의 대가을(를) 1스택 획득합니다.',
            },
            {
              name: '결투의 미학',
              desc: '도발을 무시하고, 결투 대상에게 100% 만큼 물리 피해를 2회 입힙니다.',
            },
            {
              name: '승리의 찬탈자 : 충',
              desc: '도발을 무시하고, 무작위로 150%만큼 물리 피해를 12회 입힙니다. 5스택 이상의 배신의 대가을(를) 보유한 적의 성검 에너지를 50만큼 감소시킵니다. 폰 데어 탄이 모든 배신의 대가 소모하여 동일량의 결투의 열정을(를) 획득합니다.',
            },
            {
              name: '응징의 반격',
              desc: '팔 보호대 격파 후 발동됩니다. 도발을 무시하고, 결투 대상에게 100% 만큼 물리 피해를 2회 입힙니다. 폰 데어 탄의 HP가 낮을수록 피해량이 증가합니다.',
            },
          ],
        },
        {
          name: '소총',
          attributes: {},
          skills: [
            {
              name: '용기의 분쇄',
              desc: '도발을 무시하고 결투 대상에게 120%만큼 3회 동안 물리 피해를 입힙니다. 필드 위의 결투의 열정 2스택마다 물리 피해가 30%만큼 증가합니다.',
            },
            {
              name: '수호의 붕괴',
              desc: '격파될 시 자신의 HP 100% 만큼 폰 데어 탄 본체의 HP를 감소시킵니다.',
            },
          ],
        },
      ],
    },

    {
      name: '2단계',
      desc: '세스테스 제국 12군단의 지휘관. 기사 정신을 언제나 유지하여, 생사의 기로에 선 전장일지라도 승리를 위해 음모에 굴복하지 않는다.',
      parts: [
        {
          name: '팔 보호대',
          attributes: {},
          skills: [
            {
              name: '충성의 격려 : 충',
              desc: '턴 종료 시 HP가 가장 적은 아군 한 명을 팔 보호대 회복량 250%만큼 치료합니다. 대상의 HP가 50% 미만일 시 회복량이 100% 증가합니다.',
            },
            {
              name: '격투의 수호',
              desc: '도발을 무시하고, 결투 대상에게 100% 만큼 물리 피해를 2회 입힙니다.',
            },
            {
              name: '수호의 붕괴',
              desc: '격파될 시 자신의 HP 100% 만큼 폰 데어 탄 본체의 HP를 감소시킵니다.',
            },
          ],
        },
        {
          name: '폰 데어 탄',
          attributes: {},
          skills: [
            {
              name: '참수의 결투 : 충',
              desc: '이전 턴에 결투을(를) 보유하지 않은 적에게 피해를 받았다면, 이번 턴 시작 시 피해를 입힌 횟수가 가장 많은 대상이 결투 대상이 됩니다. 결투가 없는 적이 피해를 입힐 때마다 기사의 수칙을(를) 위반한 것으로 간주하여 배신의 대가을(를) 1스택 획득합니다.',
            },
            {
              name: '결투의 미학',
              desc: '도발을 무시하고, 결투 대상에게 100%만큼 물리 피해를 2회 입힙니다.',
            },
            {
              name: '용사의 결투',
              desc: '도발을 무시하고, 결투 대상에게 120%만큼 물리 피해를 3회 입힙니다. 결투의 열정 스택마다 물리 피해가 5% 증가합니다.',
            },
            {
              name: '응징의 반격',
              desc: '팔 보호대 격파 후 발동됩니다. 도발을 무시하고, 결투 대상에게 100% 만큼 물리 피해를 2회 입힙니다. 폰 데어 탄의 HP가 낮을수록 피해량이 증가합니다.',
            },
            {
              name: '결투의 기세',
              desc: '지휘용 칼 격파 후 발동됩니다. 결투의 열정 3스택마다 용맹을(를) 3턴 동안스택 획득합니다.',
            },
            {
              name: '승리의 찬탈자 : 충',
              desc: '도발을 무시하고, 무작위로 150%만큼 물리 피해를 12회 입힙니다. 5스택 이상의 배신의 대가을(를) 보유한 적의 성검 에너지를 50만큼 감소시킵니다. 폰 데어 탄이 모든 배신의 대가 소모하여 동일량의 결투의 열정을(를) 획득합니다.',
            },
            {
              name: '개선의 맹세',
              desc: '적 전체에게 115%만큼 물리 피해를 3회 입힙니다. 결투의 열정 스택마다 이 스킬의 물리 피해가 5% 증가합니다.',
            },
          ],
        },
        {
          name: '지휘용 칼',
          attributes: {},
          skills: [
            {
              name: '용맹한 돌진',
              desc: '도발을 무시하고, 결투 대상에게 120%만큼 물리 피해를 3회 입힙니다. 대상이 결투 2스택 이상의 보유 시 1스택마다 결투의 물리 피해가 50% 증가합니다.',
            },
            {
              name: '열정의 불꽃',
              desc: '폰 데어 탄에게 결투의 열정을(를) 6스택 부여합니다.',
            },
            {
              name: '용기의 분쇄',
              desc: '격파될 시 자신의 HP 100%만큼 폰 데어 탄 본체의 HP를 감소시킵니다.',
            },
          ],
        },
      ],
    },
  ],
}
export const JORMUNGANDR: MARaid = {
  titleThumbnail: '/img/raid/3.png',
  name: '요르문간드',
  rewards: {
    normal: [],
    fame: [],
  },
  levels: [
    {
      name: '1단계',
      desc: '-',
      parts: [
        {
          name: '완력의 방패',
          attributes: {
            중급: {
              element: MAElementType.불,
              level: 25,
              life: 56250,
              damageOfPhysical: 138,
              damageOfSpell: 138,
              regeneration: 138,
              armorOfPhysical: 312,
              armorOfSpell: 312,
            },
          },
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '요르문간드',
          attributes: {
            중급: {
              element: MAElementType.어둠,
              level: 25,
              life: 57419,
              damageOfPhysical: 1053,
              damageOfSpell: 1053,
              regeneration: 60,
              armorOfPhysical: 902,
              armorOfSpell: 902,
            },
          },
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '영혼의 방패',
          attributes: {
            중급: {
              element: MAElementType.얼음,
              level: 25,
              life: 56250,
              damageOfPhysical: 138,
              damageOfSpell: 138,
              regeneration: 138,
              armorOfPhysical: 312,
              armorOfSpell: 312,
            },
          },
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
      ],
    },
    {
      name: '2단계',
      desc: '-',
      parts: [
        {
          name: '번개의 기둥',
          attributes: {
            중급: {
              element: MAElementType.불,
              level: 25,
              life: 57419,
              damageOfPhysical: 1053,
              damageOfSpell: 1053,
              regeneration: 60,
              armorOfPhysical: 902,
              armorOfSpell: 902,
            },
          },
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '요르문간드',
          attributes: {
            중급: {
              element: MAElementType.불,
              level: 25,
              life: 57419,
              damageOfPhysical: 1053,
              damageOfSpell: 1053,
              regeneration: 60,
              armorOfPhysical: 902,
              armorOfSpell: 902,
            },
          },
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '우레의 기둥',
          attributes: {},
          skills: [
            {
              name: '-',
              desc: '-',
            },
            {
              name: '-',
              desc: '-',
            },
          ],
        },
      ],
    },
  ],
}
