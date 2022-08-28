export interface SkillDivType {
   icon?: JSX.Element,
   what: string,
   info: string
}

export interface SkillType {
   usedFor: string,
   sinceWhen: string,
   icon: JSX.Element,
   name: string,
   percentSkill: number
}

export interface PercentBarType {
   forwardedRef: any,
   inViewport: boolean,
   percent: number
}

export interface SkillSectionType {
   list: SkillType[],
   title: string
}