import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import { BsFileRichtext, BsStack } from 'react-icons/bs'
import { FaSitemap } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'
import { NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../../css/OneProjectPage.css'
import PROJECTS from '../../data/ALL_PROJECTS'
import ProjectType from '../../interfaces/ProjectInterface'
import NameAndLinks from './NameAndLinks'
import ProjectInfo from './ProjectInfo'
import Thumbnail from './Thumbnail'

const ONE_PROJECT_PAGE = () => {
   window.scrollTo(0, 0)

   const [project, setProject] = React.useState<ProjectType | null>(null)

   const { id } = useParams()
   const n: NavigateFunction = useNavigate()
   const l = useLocation()

   React.useEffect(() => {
      if(!PROJECTS.some(x => x.id === id)) {
         n('/', { replace: true })
         return
      }

      setProject(PROJECTS.filter(x => x.id === id)[0])
   }, [l])

   if(project) {
      const displayBugs = (): JSX.Element => {
         return (
            <ul>
               {
                  project.bugs.length
                  ?
                  project.bugs.map((x, i) => (
                     <li key={ i }>{ x }</li>
                  ))
                  :
                  <li className="clear">No problems found</li>
               }
            </ul>
         )
      }

      const displayLanguages = (): JSX.Element => {
         return (
            <ul>
               {
                  project.language.map((x, i) => (
                     <li key={ i }>{ x }</li>
                  ))
               }
            </ul>
         )
      }

      return (
         <main className="one-project-page">
   
            <Thumbnail src={ project.thumbnail } />
            
            <article className="container">
   
               <NameAndLinks repo={ project.repository } liveUrl={ project.liveUrl } name={ project.name } />
   
               <ProjectInfo 
                  header='Type'
                  text={ project.type }
                  icon={ <FaSitemap /> }
                  cname='type'
               />
   
               <ProjectInfo 
                  header='Stack'
                  text={ project.stack }
                  icon={ <BsStack /> }
                  cname='stack'
               />
   
               <ProjectInfo 
                  header='Languages'
                  text={ displayLanguages() }
                  icon={ <MdLanguage /> }
                  cname='languages'
               />
   
               <ProjectInfo 
                  header='Description'
                  text={ project.description }
                  icon={ <BsFileRichtext /> }
                  cname='description'
               />

               <ProjectInfo 
                  header='Known problems'
                  text={ displayBugs() }
                  icon={ <AiFillBug /> }
                  cname='bugs'
               />
   
            </article>
   
         </main>
      )
   }

   return <></>
}

export default ONE_PROJECT_PAGE