import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { SocialListType } from '../../../interfaces/ContactInterfaces'
import MailIcon from './MailIcon'

const Icons = () => {
   const list: SocialListType[] = [
      { icon: <BsGithub />, text: 'Github', url: 'https://github.com/vrecek' },
      { icon: <BsFacebook />, text: 'Facebook', url: '' },
      { icon: <AiFillLinkedin />, text: 'Linkedin', url: '' }
   ]

   return (
      <div>

         {
            list.map((x, i) => (
               <span className='icon' onClick={ () => window.open(x.url, '_blank') } data-txt={ x.text } key={ i }>
                  { x.icon }
               </span>
            ))
         }
         
         <MailIcon />

      </div>
   )
}

export default Icons