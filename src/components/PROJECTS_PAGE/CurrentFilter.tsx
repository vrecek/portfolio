import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { FilterCurrent } from '../../interfaces/ProjectPageInterfaces'

const CurrentFilter = ({ text, dd }: FilterCurrent) => {
   const expandFilters = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement

      dd.switchActive()
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <div onClick={ expandFilters } className="current">

         <input data-select='Default' type="text" disabled defaultValue={ text } />
         <span><MdArrowDropDown /></span>

      </div>
   )
}

export default CurrentFilter