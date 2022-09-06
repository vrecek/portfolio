import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const RedirectType = ({ type }: { type: string }) => {
   const n: NavigateFunction = useNavigate()

   const mouseEv = (type: 'blur' | 'hover', e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const parent: HTMLElement = t.parentElement as HTMLElement

      parent.style.background = type === 'hover' ? 'rgb(163, 11, 41)' : '#252525'
   }

   const state: string = 
   type === 'website' ? 'Website'
   : type === 'program' ? 'App'
   : ''

   return (
      <div onClick={ () => n(`/projects`, { state }) } onMouseEnter={ (e) => mouseEv('hover', e) } onMouseLeave={ (e) => mouseEv('blur', e) }>

         <h3>View { type } projects</h3>
         <span className="div-icon">
            <AiOutlineArrowRight />
         </span>

      </div>
   )
}

export default RedirectType