import React from 'react'
import { PSmallText } from '../../../interfaces/ProjectInterface'

const ProjectText = ({ title, para }: PSmallText) => {
   return (
      <section className="text">

         <h2>{ title }</h2>
         <p>{ para }</p>

      </section>
   )
}

export default ProjectText