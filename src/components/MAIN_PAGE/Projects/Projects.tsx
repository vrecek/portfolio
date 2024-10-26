import '../../../css/Projects.css'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import OneProject from '../../Common/Project/OneProject'
import PROJECTS from '../../../data/ALL_PROJECTS'
import shuffleArray from '../../../functions/shuffleArray'
import ProjectType from '../../../interfaces/ProjectInterface'
import BackgroundIcon from '../../Common/BackgroundIcon'
import EntryText from './EntryText'


const Projects = () => {
   return (
      <section className="home-projects">

         <EntryText />

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