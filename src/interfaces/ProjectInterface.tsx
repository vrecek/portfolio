export default interface ProjectType {
   id: string,
   thumbnail: string,
   name: string,
   stack: StackT,
   shortPara: string,
   language: string[],
   tags: TagType[],
   type: ProjectT,
   date: number
}

export type StackT = 'Frontend' | 'Backend' | 'Fullstack' | 'Other'
export type ProjectT = 'Website' | 'Game' | 'App'

export interface TagType {
   name: string 
   icon: JSX.Element
}

export interface PSmallType {
   id: string,
   imgSrc: string, 
   tags: TagType[], 
   title: string, 
   para: string
}

export interface PSmallTags {
   tags: TagType[],
   id: string
}

export interface PSmallText {
   title: string,
   para: string
}