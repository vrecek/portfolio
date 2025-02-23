import Icon from '@/components/Common/Icon'
import { AbilityType } from '@/interfaces/HomepageInterfaces'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'


const RedirectType = ({ type }: AbilityType) => {
   const n: NavigateFunction = useNavigate()

   const mouseEv = (type: 'blur' | 'hover', e: React.MouseEvent): void => {
      const t:      HTMLElement = e.target as HTMLElement,
            parent: HTMLElement = t.parentElement as HTMLElement

      parent.style.background = type === 'hover' ? 'rgb(48, 80, 177)' : '#252525'
   }

   const state: string =  type === 'website' ? 'Website' : 'App'
   // type === 'website' 
   //    ? 'Website'
   //    : type === 'program' 
   //       ? 'App'
   //       : ''


   return (
      <div onClick={() => n(`/projects`, {state})} onMouseEnter={(e) => mouseEv('hover', e)} onMouseLeave={(e) => mouseEv('blur', e)}>

         <p>View {type} projects</p>

         <Icon cname='div-icon' icon={<AiOutlineArrowRight />} />

      </div>
   )
}


export default RedirectType