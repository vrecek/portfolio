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