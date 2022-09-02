import React from 'react'
import HeaderInfo from '../../Common/HeaderInfo'
import { FcAbout } from 'react-icons/fc'
import '../../../css/About.css'
import FigureImage from '../../Common/FigureImage'
import img1 from '../../../images/about1.jpg'
import ArticleText from './ArticleText'

const About = () => {
   return (
      <section className="home-about">

         <HeaderInfo icon={ <FcAbout /> } cname='entry-info'>
            About me
         </HeaderInfo>

         <div className="wrap first-info">

            <FigureImage source={ img1 } altTxt='img' />
            
            <ArticleText />

         </div>

      </section>
   )
}

export default About