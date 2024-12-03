import { MARaid } from '@/app/services/raid/raid.interface'
import { MAElementType, MAGrade } from '@/app/const/cards'
import { MAObjectType } from '@/app/services/ma.enum'

export const JORMUNGANDR: MARaid = {
  titleThumbnail: '/img/raid/3.png',
  name: '요르문간드',
  rewards: {
    초급: {
      normal: [
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 2, type: MAObjectType.ITEM, amount: 1, grade: MAGrade.MR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, amount: 1, grade: MAGrade.SR, isFirstClear: true },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
        { number: 12, type: MAObjectType.ITEM, grade: MAGrade.UR }, // 치아리
        { number: 10, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 11, type: MAObjectType.ITEM, grade: MAGrade.N },
        { number: 8, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
      fame: [
        { number: 18, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 22, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 16, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 21, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    중급: {
      normal: [
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
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
        { number: 18, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 22, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 16, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 21, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    상급: {
      normal: [
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
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
        { number: 18, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 22, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 16, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 21, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    특급: {
      normal: [
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
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
        { number: 18, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 22, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 16, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 21, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
    초특급: {
      normal: [
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
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
        { number: 18, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 22, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 16, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 21, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 23, type: MAObjectType.CARD, grade: MAGrade.MR },
        { number: 9, type: MAObjectType.ITEM, grade: MAGrade.MR },
        { number: 1, type: MAObjectType.ITEM, grade: MAGrade.SR },
      ],
    },
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
            상급: {
              element: MAElementType.바람,
              level: 25,
              life: 85230,
              damageOfPhysical: 210,
              damageOfSpell: 210,
              regeneration: 210,
              armorOfPhysical: 473,
              armorOfSpell: 473,
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
              element: MAElementType.바람,
              level: 0,
              life: 60228,
              damageOfPhysical: 159,
              damageOfSpell: 159,
              regeneration: 286,
              armorOfPhysical: 394,
              armorOfSpell: 394,
            },
            상급: {
              element: MAElementType.바람,
              level: 44,
              life: 89208,
              damageOfPhysical: 235,
              damageOfSpell: 235,
              regeneration: 424,
              armorOfPhysical: 584,
              armorOfSpell: 584,
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
              level: 0,
              life: 305593,
              damageOfPhysical: 1441,
              damageOfSpell: 1441,
              regeneration: 77,
              armorOfPhysical: 1226,
              armorOfSpell: 1226,
            },
            상급: {
              element: MAElementType.어둠,
              level: 49,
              life: 305593,
              damageOfPhysical: 1441,
              damageOfSpell: 1441,
              regeneration: 77,
              armorOfPhysical: 1226,
              armorOfSpell: 1226,
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
          attributes: {
            중급: {
              element: MAElementType.바람,
              level: 0,
              life: 60228,
              damageOfPhysical: 159,
              damageOfSpell: 159,
              regeneration: 286,
              armorOfPhysical: 394,
              armorOfSpell: 394,
            },
            상급: {
              element: MAElementType.바람,
              level: 44,
              life: 89208,
              damageOfPhysical: 235,
              damageOfSpell: 235,
              regeneration: 424,
              armorOfPhysical: 584,
              armorOfSpell: 584,
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
  ],
}
