export default interface ProjectType {
   id: string,
   thumbnail: string,
   name: string,
   stack: StackT,
   shortPara: string,
   language: string[],
   tags: TagType[],
   type: ProjectT,
   date: number,
   repository: string,
   liveUrl?: string,
   bugs: string[],
   description: string
}

export type StackT = 'Frontend' | 'Backend' | 'Fullstack' | 'Other'
export type ProjectT = 'Website' | 'Game' | 'App' | 'Other'

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