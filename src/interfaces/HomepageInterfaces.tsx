import { ViewportHandlerType } from "./CommonInterfaces"

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

export interface PercentBarType extends ViewportHandlerType {
   percent: number
}

export interface SkillSectionType {
   list: SkillType[],
   title: string
}

export interface AsideTable {
   urlClass: string,
   name: string
}

export interface AboutIcon {
   icon: JSX.Element,
   url: string
}

export interface AboutElement {
   date: string, 
   text: string, 
   chartNum: number,
   moveXPerc?: number
}

export interface ChartType {
   num: number,
   moveXPerc?: number
}

export type AbilityType = {
   type: 'program' | 'website'
}

export type IAbilityType = SkillDivType & AbilityType