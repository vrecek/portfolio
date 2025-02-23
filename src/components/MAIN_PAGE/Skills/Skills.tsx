import '@/css/Skills.css'
import HeaderInfo from '../../Common/HeaderInfo'
import { AiOutlineBarChart, AiOutlinePercentage } from 'react-icons/ai'
import SkillSection from './SkillSection'
import Icon from '@/components/Common/Icon'
import { languageSkills, otherSkills } from '@/data/SKILLS_OBJECT'


const Skills = () => {
   return (
      <section className="home-skills">

         <HeaderInfo icon={<AiOutlineBarChart />}>
            My skills
         </HeaderInfo>

         <SkillSection title='Languages' list={languageSkills} />
         <SkillSection title='Other' list={otherSkills} />

         <Icon cname='background-icon' icon={<AiOutlinePercentage />} />

      </section>
   )
}


export default Skills