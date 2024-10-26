import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../css/ProjectsPage.css'
import PROJECTS from '../../data/ALL_PROJECTS'
import shuffleArray from '../../functions/shuffleArray'
import { Ref } from '../../interfaces/CommonInterfaces'
import ProjectType from '../../interfaces/ProjectInterface'
import { ILocation, ProjectState } from '../../interfaces/ProjectPageInterfaces'
import OneProject from '../Common/Project/OneProject'
import Filters from './Filters'
import Searchbar from './Searchbar'


const PROJECTS_PAGE = () => {
   const mainRef: Ref = React.useRef<HTMLDivElement>(null)
   const [projects, setProjects] = React.useState<ProjectState>({
      original: PROJECTS,
      projects: PROJECTS
   })
   const initialFilter: ILocation = useLocation().state as ILocation

   React.useEffect(() => {
      window.scrollTo(0, 0)

      if (!initialFilter) return

      const filteredProjects: ProjectType[] = PROJECTS.filter(x => x.type === initialFilter),
            c:   HTMLElement = mainRef.current!,
            inp: HTMLInputElement = c.children[0].children[2].children[1].children[1].children[0].children[0] as HTMLInputElement
      
      inp.value = initialFilter
      inp.setAttribute('data-select', initialFilter)

      setProjects({
         original: PROJECTS,
         projects: shuffleArray<ProjectType>(filteredProjects)
      })
   }, [])

   
   return (
      <main ref={ mainRef } className="projects-page">

         <Filters state={ setProjects } />

         <section className="entry-section">

            <h1 className='number'>Projects ({ projects.projects.length })</h1>
            <Searchbar state={setProjects} />

         </section>

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