import React, { CSSProperties } from 'react'
import { ButtonType } from '../../interfaces/CommonInterfaces'

const Button = ({ text, action, additional, cname }: ButtonType) => {
   const blank = ()=>{}
   const style: CSSProperties = {
      pointerEvents: 'none'
   } as CSSProperties
   
   return (
      <button onClick={ action ?? blank } className={ cname ?? '' }>

         <label style={ style }>
            { text }
         </label>

         { 
            additional && 
            <span style={ style }>
               { additional }
            </span> 
         }
      
      </button>
   )
}

export default Button