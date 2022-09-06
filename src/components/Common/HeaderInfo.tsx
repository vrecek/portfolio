import React, { CSSProperties } from 'react'
import { HeaderType } from '../../interfaces/CommonInterfaces'

const HeaderInfo = ({ children, icon, cname }: HeaderType) => {
   const dStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2em 0'
   }

   const hStyle: CSSProperties = {
      fontSize: 'clamp(.95rem, 4vw, 1.2rem)',
      fontWeight: '700',
      letterSpacing: '1px'
   }

   const sStyle: CSSProperties = {
      width: '23px',
      height: '23px',
      marginLeft: '.75em',
      color: 'rgb(85, 85, 85)'
   }

   const signStyle: CSSProperties = {
      fontSize: '.9rem',
      color: 'rgb(85, 85, 85)',
      fontWeight: '700'
   }

   return (
      <div style={ dStyle } className={ cname ?? '' }>

         <h1 style={ hStyle }>

            <span style={ signStyle }>&#60;</span>
            { children }
            <span style={ signStyle }>/&#62;</span>

         </h1>

         { 
            icon && 
            <span style={ sStyle }>
               { icon }
            </span> 
         }

      </div>
   )
}

export default HeaderInfo