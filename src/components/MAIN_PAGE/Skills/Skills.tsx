import React from 'react'
import '../../../css/Skills.css'
import HeaderInfo from '../../Common/HeaderInfo'
import { AiOutlineBarChart, AiFillHtml5 } from 'react-icons/ai'
import { SiTypescript, SiJavascript, SiReact, SiGimp, SiGit, SiNodedotjs } from 'react-icons/si'
import { IoLogoSass, IoLogoPython, IoLogoCss3 } from 'react-icons/io'
import { SkillType } from '../../../interfaces/HomepageInterfaces'
import SkillSection from './SkillSection'

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
         percentSkill: 90,
         name: 'React JS',
         icon: <SiReact />,
         usedFor: 'Library for building websites, only way to do it',
         sinceWhen: 'October 2021'
      },

      {
         percentSkill: 90,
         name: 'Node JS',
         icon: <SiNodedotjs />,
         usedFor: 'Creating server side applications with express and mongoose',
         sinceWhen: 'December 2021'
      },

      {
         percentSkill: 60,
         name: 'Gimp',
         icon: <SiGimp />,
         usedFor: 'Ocasionally when there is need to cut the image',
         sinceWhen: '2022'
      }
   ]

   return (
      <section className="home-skills">

         <HeaderInfo cname='entry-info' icon={ <AiOutlineBarChart /> }>
            My skills
         </HeaderInfo>

         <SkillSection title='Languages' list={ languageSkills } />
         <SkillSection title='Other' list={ otherSkills } />

      </section>
   )
}

export default Skills