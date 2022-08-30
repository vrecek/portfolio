import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { PSmallTags } from '../../../interfaces/ProjectInterface'
import Button from '../Button'

const ProjectTags = ({ tags, id }: PSmallTags) => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="tags">

         <ul>

            {
               tags.map((x, i) => (
                  <li key={ i } data-text={ x.name }>
                     <span>{ x.icon }</span>
                  </li>
               ))
            }

         </ul>

         <Button text='Details' action={ () => n(`/project/${ id }`) } />

      </section>
   )
}

export default ProjectTags