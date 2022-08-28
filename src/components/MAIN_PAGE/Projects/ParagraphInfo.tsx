import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const ParagraphInfo = ({ children }: { children: string | number }) => {
   const n: NavigateFunction = useNavigate()
   const redirectProject = (): void => n('/projects')

   return (
      <p className='project-para'>

         To see all ({ children }) projects: <span onClick={ redirectProject }>click here</span>

      </p>
   )
}

export default ParagraphInfo