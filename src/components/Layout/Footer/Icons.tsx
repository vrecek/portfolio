import React from 'react'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import MailIcon from './MailIcon'

const Icons = () => {
   return (
      <div>

         <span className='icon' data-txt='Github'><BsGithub /></span>
         <span className='icon' data-txt='Facebook'><BsFacebook /></span>
         <MailIcon />

      </div>
   )
}

export default Icons