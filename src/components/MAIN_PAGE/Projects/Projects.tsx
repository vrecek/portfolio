import React from 'react'
import '../../../css/Projects.css'
import HeaderInfo from '../../Common/HeaderInfo'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import OneProject from '../../Common/Project/OneProject'
import ParagraphInfo from './ParagraphInfo'

const Projects = () => {
   return (
      <section className="projects">

         <HeaderInfo icon={ <AiOutlineFundProjectionScreen /> } cname='entry-info'>
            My projects
         </HeaderInfo>
         <ParagraphInfo>123</ParagraphInfo>

         <section className="container">

            <OneProject />
            <OneProject />
            <OneProject />
            <OneProject />
            <OneProject />
            <OneProject />

         </section>

      </section>
   )
}

export default Projects