export default interface ProjectType {
   id:          string,
   thumbnail:   string,
   name:        string,
   shortPara:   string,
   repository:  string,
   liveUrl?:    string,
   description: string
   date:        number,
   language:    string[],
   bugs:        string[],
   tags:        TagType[],
   type:        ProjectT,
   stack:       StackT,
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