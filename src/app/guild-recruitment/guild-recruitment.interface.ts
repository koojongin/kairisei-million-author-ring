import { MAServer } from '@/app/guild-recruitment/guild-recruitment.enum'

export interface RecruitmentGuild {
  name: string
  server: MAServer
  leader: string
  id: string
  isNeedApprovement?: boolean
  reqLevel?: number
  link?: string
}
