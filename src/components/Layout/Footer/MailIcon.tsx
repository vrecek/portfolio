import React from 'react'
import { ImMail4 } from 'react-icons/im'

const MailIcon = () => {
   const copyMail = (e: React.MouseEvent): void => {
      const t = e.target as HTMLElement
      const text: HTMLElement = t.children[1] as HTMLElement

      window.navigator.clipboard.writeText('oktawiusz2002@gmail.com')
      text.textContent = 'Copied!'

      t.style.transform = 'scale(.85)'

      setTimeout(() => t.style.transform = 'scale(1)', 300);
      setTimeout(() => text.textContent = 'Copy mail', 1500)
   }
   
   return (
      <span onClick={ copyMail } className='icon mail'>

         <ImMail4 />
         <span>Copy mail</span>

      </span>
   )
}

export default MailIcon