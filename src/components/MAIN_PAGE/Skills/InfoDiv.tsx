import React from 'react'
import { SkillDivType } from '../../../interfaces/HomepageInterfaces'

const InfoDiv = ({ what, info, icon }: SkillDivType) => {
   return (
      <div className="info">

         <h4>
            <span>{ what }</span>
            { info }
         </h4>

      </div>
   )
}

export default InfoDiv