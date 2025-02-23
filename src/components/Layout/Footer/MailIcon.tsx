import React from 'react'
import { ImMail4 } from 'react-icons/im'
import MAIL_ADDRESS from '@/data/MAIL_ADDRESS'
import Icon from '@/components/Common/Icon'


const MailIcon = () => {
   const copyMail = (e: React.MouseEvent): void => {
      const t:    HTMLElement = e.currentTarget as HTMLElement,
            text: HTMLElement = t.parentElement!.children[1] as HTMLElement

      window.navigator.clipboard.writeText(MAIL_ADDRESS)
      text.style.opacity = '1'

      setTimeout(() => text.style.opacity = '0', 1500)
   }
   

   return (
      <span className='icon'>

         <Icon clickfn={copyMail} cname='mail' icon={<ImMail4 />} />
         <p>Copied</p>

      </span>
   )
}


export default MailIcon