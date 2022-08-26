import React from 'react'
import { FigureType } from '../../interfaces/CommonInterfaces'

const FigureImage = ({ source, cname, altTxt }: FigureType) => {
   return (
      <figure className={ cname ?? '' }>

         <img src={ source } alt={ altTxt ?? 'image' } />

      </figure>
   )
}

export default FigureImage