import React from 'react'
import FigureImage from '../Common/FigureImage'
import ArticleText from '../MAIN_PAGE/About/ArticleText'
import img1 from '../../images/about1.jpg'
import '../../css/AboutPage.css'

const ABOUT_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="about-page">

         <FigureImage source={ img1 } altTxt='img' />
         
         <ArticleText />

      </main>
   )
}

export default ABOUT_PAGE