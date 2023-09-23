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
         percentSkill: 90,
         name: 'TypeScript',
         icon: <SiTypescript />,
         usedFor: 'Main language - websites, small games, applications',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 90,
         name: 'JavaScript',
         icon: <SiJavascript />,
         usedFor: 'Main language, used with TypeScript',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 95,
         name: 'SCSS',
         icon: <IoLogoSass />,
         usedFor: 'For styling websites',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 95,
         name: 'CSS',
         icon: <IoLogoCss3 />,
         usedFor: 'For styling websites, used with SCSS',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 100,
         name: 'HTML',
         icon: <AiFillHtml5 />,
         usedFor: 'For creating websites',
         sinceWhen: 'From the start'
      },

      {
         percentSkill: 65,
         name: 'Python',
         icon: <IoLogoPython />,
         usedFor: 'Automating tasks like resizing images; desktop apps with Tkinter',
         sinceWhen: 'April 2022'
      },

      {
         percentSkill: 55,
         name: 'Bash',
         icon: <SiGnubash />,
         usedFor: 'Mostly for moving files',
         sinceWhen: 'November 2022'
      }
   ]

   const otherSkills: SkillType[] = [
      {
         percentSkill: 80,
         name: 'Git',
         icon: <SiGit />,
         usedFor: 'Version control, storing all projects',
         sinceWhen: 'November 2021'
      },

      {
         percentSkill: 95,
         name: 'React JS',
         icon: <SiReact />,
         usedFor: 'Library for building websites.',
         sinceWhen: 'October 2021'
      },

      {
         percentSkill: 95,
         name: 'Node JS',
         icon: <SiNodedotjs />,
         usedFor: 'Creating server side applications and desktop apps with Electron',
         sinceWhen: 'December 2021'
      },

      {
         percentSkill: 90,
         name: 'Linux',
         icon: <DiLinux />,
         usedFor: 'Ubuntu, my everyday operating system. Including terminal commands.',
         sinceWhen: 'October 2022'
      },

      {
         percentSkill: 85,
         name: 'Electron JS',
         icon: <IoLogoElectron />,
         usedFor: 'Framework for building desktop applications with Typescript/Javascript',
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