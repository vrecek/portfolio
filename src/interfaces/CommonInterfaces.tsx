import React from "react"


export interface FigureType {
   source:     string,
   altTxt?:    string,
   cname?:     string
   reference?: Ref
}

export type IconType = {
   icon:       JSX.Element
   cname?:     string
   reference?: Ref
   clickfn?:   (e: React.MouseEvent) => void
}

export type ButtonType = {
   text: string, 
   action?: React.MouseEventHandler, 
   additional?: JSX.Element | string | number, 
   cname?: string
}

export type HeaderType = {
   children: any,
   icon?:    JSX.Element,
}

export type Text = {
   children: string
}

export type ViewportHandlerType = {
   forwardedRef: any,
   inViewport: boolean,
}

export type Ref = React.RefObject<HTMLDivElement>