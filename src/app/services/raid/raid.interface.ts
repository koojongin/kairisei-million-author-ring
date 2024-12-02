export interface MARaid {
  titleThumbnail: string
  name: string
  levels: MARaidLevel[]
}

export interface MARaidLevel {
  name: string
  desc: string
  parts: MARaidPart[]
}

export interface MARaidPart {
  name: string
  skills: MARaidPartSkill[]
  element?: string
  level?: number
  life?: number
  damageOfPhysical?: number
  damageOfSpell?: number
  evade?: number
  armorOfPhysical?: number
  armorOfSpell?: number
}

export interface MARaidPartSkill {
  name: string
  desc: string
}
