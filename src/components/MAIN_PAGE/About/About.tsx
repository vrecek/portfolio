import React from 'react'
import HeaderInfo from '../../Common/HeaderInfo'
import { FcAbout } from 'react-icons/fc'
import '../../../css/About.css'

const About = () => {
   return (
      <section className="about">

         <HeaderInfo icon={ <FcAbout /> } cname='entry-info'>
            About me
         </HeaderInfo>

      </section>
   )
}

export default About