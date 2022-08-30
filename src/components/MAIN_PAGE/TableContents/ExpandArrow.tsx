import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ExpandArrow = () => {
   const expandMenu = (e: React.MouseEvent) => {
      const t: HTMLElement = e.target as HTMLElement
      const menu: HTMLElement = t.parentElement! as HTMLElement
      const arrow: HTMLElement = t.children[0] as HTMLElement

      menu.classList.toggle('active')

      if(menu.classList.contains('active')) {
         menu.style.transform = 'translateY(-50%) translateX(0)'
         arrow.style.transform = 'rotate(180deg)'

         return
      }

      menu.style.transform = 'translateY(-50%) translateX(-100%)'
      arrow.style.transform = 'rotate(0)'
   }

   return (
      <span onClick={ expandMenu } className="expand-arrow">

         <span> <MdKeyboardArrowRight /> </span>

      </span>
   )
}

export default ExpandArrow