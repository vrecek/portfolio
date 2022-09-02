export interface ThumbnailType {
   src: string
}

export interface TitleAndLinks {
   name: string,
   liveUrl?: string,
   repo: string
}

export interface InfoType {
   icon: JSX.Element,
   header: string,
   text: string | JSX.Element,
   cname: string
}