import React from 'react'
import { AiFillSetting } from 'react-icons/ai'


const FiltersDropdown = () => {
   const toggleFilter = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.currentTarget as HTMLElement,
            parent: HTMLElement = t.parentElement! as HTMLElement

      
      t.classList.toggle('active')

      if (t.classList.contains('active')) {
         parent.style.translate = '0 0'
         t.style.translate = '-100% 0'
         t.style.top = '0'

         return
      }

      parent.style.translate = '-100% 0'
      t.style.translate = '0 -50%'
      t.style.top = '50%'
   }


   return (
      <span onClick={ toggleFilter } className="filter-icon">

         <AiFillSetting />

      </span>
   )
}

export default FiltersDropdown