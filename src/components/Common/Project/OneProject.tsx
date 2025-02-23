import FigureImage from '../FigureImage'
import ProjectTags from './ProjectTags'
import ProjectText from './ProjectText'
import { PSmallType } from '@/interfaces/ProjectInterface'


const OneProject = ({ imgSrc, tags, title, para, id }: PSmallType) => {
   return (
      <article className="project-small">

         <FigureImage source={imgSrc} altTxt='project' />

         <div className="wrap">

            <ProjectText title={title} para={para} />
            <ProjectTags tags={tags} id={id} />

         </div>

      </article>
   )
}


export default OneProject