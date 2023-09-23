import React from 'react'
import { SkillType } from '../../../interfaces/HomepageInterfaces'
import InfoDiv from './InfoDiv'
import PercentBar from './PercentBar'
import handleViewport from 'react-in-viewport'

const PercentContext = React.createContext<number>(0)

const OneSkill = ({ name, sinceWhen, usedFor, icon, percentSkill }: SkillType) => {
   const PercentsBar = handleViewport(PercentBar as any)

   return (
      <article className="skill">

         <span className="icon">{ icon }</span>
         <h2>{ name }</h2>

         <InfoDiv what='Using since: ' info={ sinceWhen } />
         <InfoDiv what='Used for: ' info={ usedFor } />

         <PercentContext.Provider value={ percentSkill }>
            <PercentsBar />
         </PercentContext.Provider>

      </article>
   )
}

export default OneSkill
export { PercentContext }