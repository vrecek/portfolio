export interface ThumbnailType {
   src: string
}

export interface TitleAndLinks {
   name: string,
   liveUrl?: string,
   repo: string
}

export type InfoType = ProjectText &  {
   icon: JSX.Element,
   cname: string
}

export type ProjectText = {
   header: string
   text: string | JSX.Element
}