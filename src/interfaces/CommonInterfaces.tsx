export interface FigureType {
   source: string,
   altTxt?: string,
   cname?: string
}

export interface ButtonType {
   text: string, 
   action?: React.MouseEventHandler, 
   additional?: JSX.Element | string | number, 
   cname?: string
}

export interface HeaderType {
   children: any,
   icon?: JSX.Element,
   cname?: string
}

export interface Text {
   children: string
}

export interface ViewportHandlerType {
   forwardedRef: any,
   inViewport: boolean,
}

export type Ref = React.RefObject<HTMLDivElement>