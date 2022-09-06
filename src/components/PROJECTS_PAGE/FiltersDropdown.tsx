import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../functions/DropdownClass'

const FiltersDropdown = () => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const toggleFilter = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement

      if(document.body.clientWidth > 480) return

      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement
      const arrow: HTMLElement = t.children[1] as HTMLElement

      dd.switchActive()
      
      dd.getActive ? dd.expandMenu(.3, list, 'flex') : dd.shrinkMenu(.3, list, 'flex')

      dd.rotateArrow(arrow)
   }

   return (
      <div onClick={ toggleFilter } className="filter-text">

         <h1>FILTERS</h1>
         <span className="icon"><MdArrowDropDown /></span>

      </div>
   )
}

export default FiltersDropdown