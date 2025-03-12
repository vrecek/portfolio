import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import '@/css/ProjectsPage.css'
import PROJECTS from '@/data/ALL_PROJECTS'
import ProjectType from '@/interfaces/ProjectInterface'
import { ICommitContext, ILocation, ProjectState } from '@/interfaces/ProjectPageInterfaces'
import OneProject from '../Common/Project/OneProject'
import Filters from './Filters'
import Searchbar from './Searchbar'
import latestCommitFetch from '@/utils/latestCommitFetch'
import filterFn from '@/utils/filterFn'
import shuffleArray from '@/utils/shuffleArray'
import LoadingProjects from './LoadingProjects'
import filterInputOnChange from '@/utils/filterInputOnChange'
import { CommitContext } from '@/App'


const PROJECTS_PAGE = () => {
   const initialFilter: ILocation      = useLocation().state as ILocation,
         commitContext: ICommitContext = useContext(CommitContext)!

   const [projects, setProjects] = React.useState<ProjectState | null>(null)


   const changeInputElement = (type: string, val: string): void => {
      const input: HTMLInputElement = document.querySelector(`main.projects-page div.filter-wrap.${type} input`) as HTMLInputElement

      filterInputOnChange(input, val)
   }

   const changeFilterFn = async (): Promise<void> => {
      const filtered: ProjectType[] = await filterFn(projects!)

      setProjects((curr: any) => {
         curr.projects = filtered
         return {...curr}
      })
   }


   React.useEffect(() => {
      (async () => {
         window.scrollTo(0, 0)

         const f_sec:    HTMLElement   = document.querySelector('main.projects-page section.filter') as HTMLElement
         let   filtered: ProjectType[] = [...PROJECTS],
               newest:   ProjectType[] = commitContext.arr


         if (!commitContext.arr.length)
         {
            newest = await latestCommitFetch(filtered)

            if (newest.length)
            {
               filtered = [...newest]

               changeInputElement('Date', 'Latest commit')
               commitContext.fn(newest)
            }
            else 
               filtered = shuffleArray<ProjectType>(filtered)
         }
         else
         {
            filtered = [...commitContext.arr]

            changeInputElement('Date', 'Latest commit')
         }


         if (initialFilter)
         {
            switch (initialFilter)
            {
               case 'Website':
                  filtered = filtered.filter(x => x.type === 'Website')
                  break

               case 'App':
                  filtered = filtered.filter(x => x.type !== 'Website')
                  break
            }
            
            changeInputElement('Type', initialFilter)
         }
         

         setProjects({
            original: PROJECTS,
            projects: filtered,
            lastcomm: newest
         })

         f_sec.style.display = 'flex'
      })()
   }, [])

   
   return (
      <main className="projects-page">

         <Filters update_fn={changeFilterFn} />

         {
            projects 
            ?
            <>
               <section className="entry-section">

               <h1 className='number'>Projects ({projects.projects.length})</h1>
               <Searchbar update_fn={changeFilterFn} />

               </section>

               <section className="project-container">
               {
                  projects.projects.length 
                  ?
                     projects.projects.map(x => (
                        <OneProject 
                           key={x.id}
                           imgSrc={x.thumbnail}
                           tags={x.tags}
                           id={x.id}
                           title={x.name}
                           para={x.shortPara}
                        />
                     ))
                  :
                     <h2>No projects found</h2>
               }
               </section>
            </>
            :
            <LoadingProjects />
         }

      </main>
   )
}


export default PROJECTS_PAGE