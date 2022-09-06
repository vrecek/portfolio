import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import DropDown from '../../../functions/DropdownClass'
import { Text } from '../../../interfaces/CommonInterfaces'

const SkillHeader = ({ children }: Text) => {
   const dd: DropDown = new DropDown()

   const toggleSkills = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const cont: HTMLElement = t.parentElement!.children[1] as HTMLElement
      const arrow: HTMLElement = t.children[1] as HTMLElement
      
      dd.getActive ? dd.expandMenu(.4, cont, 'flex') : dd.shrinkMenu(.4, cont, 'flex')
      dd.rotateArrow(arrow)

      dd.switchActive()
   }

   return (
      <div onClick={ toggleSkills } className="info-skill">

         <h4>{ children }</h4>
         <span>{ <RiArrowDownSLine /> }</span>

      </div>
   )
}

export default SkillHeader