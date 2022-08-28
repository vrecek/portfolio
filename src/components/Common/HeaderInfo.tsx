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
      fontSize: '1.1rem',
      fontWeight: '700',
      letterSpacing: '1px'
   }

   const sStyle: CSSProperties = {
      width: '23px',
      height: '23px',
      marginLeft: '.75em'
   }

   return (
      <div style={ dStyle } className={ cname ?? '' }>

         <h1 style={ hStyle }>
            { children }
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