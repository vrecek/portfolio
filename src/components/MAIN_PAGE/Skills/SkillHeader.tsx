import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Text } from '@/interfaces/CommonInterfaces'
import Icon from '@/components/Common/Icon'
import DropDown from '@/utils/DropdownClass'


const SkillHeader = ({ children }: Text) => {
   const dd: DropDown = new DropDown()

   const toggleSkills = (e: React.MouseEvent): void => {
      const t:     HTMLElement = e.target as HTMLElement,
            cont:  HTMLElement = t.parentElement!.children[1] as HTMLElement,
            arrow: HTMLElement = t.children[1] as HTMLElement
      
      dd.getActive ? dd.expandMenu(.4, cont, 'flex') : dd.shrinkMenu(.4, cont, 'flex')
      dd.rotateArrow(arrow)

      dd.switchActive()
   }


   return (
      <div onClick={toggleSkills} className="info-skill">

         <p>{children}</p>
         <Icon icon={<RiArrowDownSLine />} />

      </div>
   )
}


export default SkillHeader