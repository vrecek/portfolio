import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import Icon from '../Common/Icon'


const FiltersDropdown = () => {
   const toggleFilter = (e: React.MouseEvent): void => {
      const t:      HTMLElement = e.currentTarget as HTMLElement,
            parent: HTMLElement = t.parentElement! as HTMLElement

      
      t.classList.toggle('active')

      if (t.classList.contains('active'))
      {
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
      <Icon clickfn={toggleFilter} cname='filter-icon' icon={<AiFillSetting />} />
   )
}

export default FiltersDropdown