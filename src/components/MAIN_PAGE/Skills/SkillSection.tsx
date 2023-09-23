import { SkillSectionType } from '../../../interfaces/HomepageInterfaces'
import OneSkill from './OneSkill'
import SkillHeader from './SkillHeader'

const SkillSection = ({ title, list }: SkillSectionType) => {
   return (
      <div className='wrap'>

         <SkillHeader>{ title }</SkillHeader>
         
         <section className="container">
            {
               list.map((x, i) => (
                  <OneSkill 
                     key={ i }
                     percentSkill={ x.percentSkill } 
                     name={ x.name } 
                     icon={ x.icon } 
                     usedFor={ x.usedFor }
                     sinceWhen={ x.sinceWhen } 
                  />
               ))
            }
         </section>
         
      </div>
   )
}

export default SkillSection