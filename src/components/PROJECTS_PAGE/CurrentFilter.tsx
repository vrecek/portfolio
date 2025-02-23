import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FilterCurrent } from '../../interfaces/ProjectPageInterfaces'
import Icon from '../Common/Icon'

const CurrentFilter = ({ text, dd, allDds }: FilterCurrent) => {
   const expandFilters = (e: React.MouseEvent): void => {
      const t:     HTMLElement = e.currentTarget as HTMLElement,
            list:  HTMLElement = t.parentElement!.children[1] as HTMLElement,
            arrow: HTMLElement = t.children[1] as HTMLElement


      for (const dropdown of allDds) 
         if (dropdown !== dd && dropdown.getActive)
         {
            dropdown.switchActive()

            const arrow = dropdown.getActiveList!.parentElement!.children[0].children[1] as HTMLElement
            dropdown.rotateArrow(arrow)

            dropdown.shrinkMenu(.3)
         }
      
      
      dd.switchActive()
      dd.getActive 
         ? dd.expandMenu(.3, list) 
         : dd.shrinkMenu(.3)

      dd.rotateArrow(arrow)
   }


   return (
      <div onClick={expandFilters} className="current">

         <input data-select='Default' type="text" disabled defaultValue={text} />
         <Icon icon={<MdOutlineKeyboardArrowDown />} />

      </div>
   )
}

export default CurrentFilter