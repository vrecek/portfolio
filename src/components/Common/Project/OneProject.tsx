import React from 'react'
import FigureImage from '../FigureImage'
import p from '../../../images/pp.png'
import ProjectTags from './ProjectTags'
import ProjectText from './ProjectText'

const OneProject = () => {
   return (
      <article className="project-small">

         <FigureImage source={ p } altTxt='project' />

         <div className="wrap">

            <ProjectText />
            <ProjectTags />

         </div>

      </article>
   )
}

export default OneProject