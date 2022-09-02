import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AboutIcon } from '../../../interfaces/HomepageInterfaces'

const AboutIcons = () => {
   const icons: AboutIcon[] = [
      { icon: <BsGithub />, url: 'https://github.com/vrecek' }
   ]

   return (
      <section className="icons">

         {
            icons.map((x, i) => (
               <span onClick={ () => window.open(x.url, '_blank') } key={ i }>
                  { x.icon }
               </span>
            ))
         }

      </section>
   )
}

export default AboutIcons