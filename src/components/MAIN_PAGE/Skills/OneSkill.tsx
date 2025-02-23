import React from 'react'
import { SkillType } from '../../../interfaces/HomepageInterfaces'
import InfoDiv from './InfoDiv'
import PercentBar from './PercentBar'
import handleViewport from 'react-in-viewport'
import Icon from '@/components/Common/Icon'

const PercentContext = React.createContext<number>(0)


const OneSkill = ({ name, sinceWhen, usedFor, icon, percentSkill }: SkillType) => {
   const PercentsBar = handleViewport(PercentBar as any)


   return (
      <article className="skill">

         <Icon cname='icon' icon={icon} />
         <p className='name'>{name}</p>

         <InfoDiv what='Using since: ' info={sinceWhen} />
         <InfoDiv what='Used for: ' info={usedFor} />

         <PercentContext.Provider value={percentSkill}>
            <PercentsBar />
         </PercentContext.Provider>

      </article>
   )
}


export default OneSkill
export { PercentContext }