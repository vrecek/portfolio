import React from 'react'
import { AbilityType } from '../../../interfaces/HomepageInterfaces'
import RedirectType from './RedirectType'

const OneAbility = ({ icon, what, info, type }: AbilityType) => {
   return (
      <article className="ability">

         <span className="icon">{ icon }</span>
         <h2>{ what }</h2>
         <p>{ info }</p>

         <RedirectType type={ type } />

      </article>
   )
}

export default OneAbility