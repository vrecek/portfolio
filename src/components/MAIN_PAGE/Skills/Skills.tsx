import '../../../css/Skills.css'
import HeaderInfo from '../../Common/HeaderInfo'
import { AiOutlineBarChart, AiFillHtml5, AiOutlinePercentage } from 'react-icons/ai'
import { SiTypescript, SiJavascript, SiReact, SiGit, SiNodedotjs, SiGnubash } from 'react-icons/si'
import { IoLogoSass, IoLogoPython, IoLogoCss3 } from 'react-icons/io'
import { SkillType } from '../../../interfaces/HomepageInterfaces'
import SkillSection from './SkillSection'
import BackgroundIcon from '../../Common/BackgroundIcon'
import { DiLinux } from 'react-icons/di'
import { IoLogoElectron } from 'react-icons/io5'


const Skills = () => {
   const languageSkills: SkillType[] = [
      {
         percentSkill: 95,
         name: 'TypeScript',
         icon: <SiTypescript />,
         usedFor: 'Websites, web games, applications, HTTP servers',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 95,
         name: 'JavaScript',
         icon: <SiJavascript />,
         usedFor: 'Used with TypeScript',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 95,
         name: 'SCSS',
         icon: <IoLogoSass />,
         usedFor: 'Styling websites',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 95,
         name: 'CSS',
         icon: <IoLogoCss3 />,
         usedFor: 'Styling websites, used with SCSS',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 100,
         name: 'HTML',
         icon: <AiFillHtml5 />,
         usedFor: 'Creating websites',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 75,
         name: 'Python',
         icon: <IoLogoPython />,
         usedFor: 'Automating tasks',
         sinceWhen: 'April 2022'
      },

      {
         percentSkill: 65,
         name: 'Bash',
         icon: <SiGnubash />,
         usedFor: 'Linux system automation',
         sinceWhen: 'November 2022'
      }
   ]

   const otherSkills: SkillType[] = [
      {
         percentSkill: 80,
         name: 'Git',
         icon: <SiGit />,
         usedFor: 'Version control, storing projects',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 95,
         name: 'React JS',
         icon: <SiReact />,
         usedFor: 'Building websites',
         sinceWhen: 'October 2021'
      },

      {
         percentSkill: 90,
         name: 'Node JS',
         icon: <SiNodedotjs />,
         usedFor: 'Creating server side applications',
         sinceWhen: 'December 2021'
      },

      {
         percentSkill: 95,
         name: 'Linux',
         icon: <DiLinux />,
         usedFor: 'Daily-drive OS (Archlinux)',
         sinceWhen: 'October 2022'
      },

      {
         percentSkill: 70,
         name: 'Electron JS',
         icon: <IoLogoElectron />,
         usedFor: 'For building desktop applications',
         sinceWhen: 'December 2022'
      }
   ]

   
   return (
      <section className="home-skills">

         <HeaderInfo cname='entry-info' icon={ <AiOutlineBarChart /> }>
            My skills
         </HeaderInfo>

         <SkillSection title='Languages' list={ languageSkills } />
         <SkillSection title='Other' list={ otherSkills } />

         <BackgroundIcon icon={ <AiOutlinePercentage /> } />

      </section>
   )
}


export default Skills