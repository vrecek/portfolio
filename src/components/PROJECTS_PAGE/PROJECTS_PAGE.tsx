import React from 'react'
import '../../css/ProjectsPage.css'
import PROJECTS from '../../data/ALL_PROJECTS'
import shuffleArray from '../../functions/shuffleArray'
import ProjectType from '../../interfaces/ProjectInterface'
import { ProjectState } from '../../interfaces/ProjectPageInterfaces'
import OneProject from '../Common/Project/OneProject'
import Filters from './Filters'

const PROJECTS_PAGE = () => {
   React.useEffect(() => window.scrollTo(0, 0), [])

   const stateDefault: ProjectState = {
      original: PROJECTS,
      projects: shuffleArray<ProjectType>(PROJECTS)
   }
   const [projects, setProjects] = React.useState<ProjectState>(stateDefault)

   return (
      <main className="projects-page">

         <Filters state={ setProjects } />

         <section className="project-container">

            {
               projects.projects.map(x => (
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

      </main>
   )
}

export default PROJECTS_PAGE