import React from 'react'
import '../../../css/Projects.css'
import HeaderInfo from '../../Common/HeaderInfo'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import OneProject from '../../Common/Project/OneProject'
import ParagraphInfo from './ParagraphInfo'
import PROJECTS, { PROJECTS_LEN } from '../../../data/ALL_PROJECTS'
import shuffleArray from '../../../functions/shuffleArray'
import ProjectType from '../../../interfaces/ProjectInterface'
import BackgroundIcon from '../../Common/BackgroundIcon'

const Projects = () => {
   return (
      <section className="home-projects">

         <HeaderInfo icon={ <AiOutlineFundProjectionScreen /> } cname='entry-info'>
            My projects
         </HeaderInfo>
         <ParagraphInfo>{ PROJECTS_LEN }</ParagraphInfo>

         <section className="container">

            {
               shuffleArray<ProjectType>(PROJECTS).slice(0, 6).map(x => (
                  <OneProject 
                     key={ x.id }
                     imgSrc={ x.thumbnail }
                     tags={ x.tags }
                     id={ x.id }
                     title={ x.name }
                     para={ x.shortPara }
                  />
               ))
            }

         </section>

         <BackgroundIcon icon={ <AiOutlineFundProjectionScreen /> } />

      </section>
   )
}

export default Projects