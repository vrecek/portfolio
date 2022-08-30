import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { SocialListType } from '../../interfaces/ContactInterfaces'

const SocialList = () => {
   const list: SocialListType[] = [
      { icon: <BsGithub />, text: 'Github', url: 'https://github.com/vrecek' },
      { icon: <BsFacebook />, text: 'Facebook', url: '' },
      { icon: <AiFillLinkedin />, text: 'Linkedin', url: '' }
   ]

   return (
      <ul>

         {
            list.map((x, i) => (
               <li onClick={ () => window.open(x.url, '_blank') } key={ i }>

                  <h4>{ x.text }</h4> 
                  <span>{ x.icon }</span>

               </li>
            ))
         }

      </ul>
   )
}

export default SocialList