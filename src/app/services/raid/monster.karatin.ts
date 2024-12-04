import { MARaid } from '@/app/services/raid/raid.interface'
import { MAElementType, MAGrade } from '@/app/const/cards'
import { MAObjectType } from '@/app/services/ma.enum'

export const KARATIN: MARaid = {
  titleThumbnail: '/img/raid/6.png',
  name: '카라틴',
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
