import { MARaid } from '@/app/services/raid/raid.interface'
import { MAElementType, MAGrade } from '@/app/const/cards'
import { MAObjectType } from '@/app/services/ma.enum'

export const CENTER_SYSTEM: MARaid = {
  titleThumbnail: '/img/raid/7.png',
  name: '중앙 시스템',
  rewards: {
    초급: {
      normal: [],
      fame: [],
    },
    중급: {
      normal: [],
      fame: [],
    },
    상급: {
      normal: [],
      fame: [],
    },
    특급: {
      normal: [],
      fame: [],
    },
    초특급: {
      normal: [],
      fame: [],
    },
  },
  levels: [
    {
      name: '1단계',
      desc: '-',
      parts: [
        {
          name: '',
          attributes: {},
          skills: [
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '',
          attributes: {},
          skills: [
            {
              name: '-',
              desc: '-',
            },
          ],
        },
        {
          name: '',
          attributes: {},
          skills: [
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
