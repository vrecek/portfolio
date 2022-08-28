import React from 'react'
import { DiReact } from 'react-icons/di'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../Button'

const ProjectTags = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="tags">

         <ul>

            <li data-text='ReactJS'>
               <span><DiReact /></span>
            </li>

            <li>
               <span><DiReact /></span>
            </li>

            <li>
               <span><DiReact /></span>
            </li>

         </ul>

         <Button text='Details' action={ () => n('/project/name') } />

      </section>
   )
}

export default ProjectTags