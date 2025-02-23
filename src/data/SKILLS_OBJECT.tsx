import { SiTypescript, SiReact, SiGit, SiNodedotjs, SiGnubash } from 'react-icons/si'
import { IoLogoSass, IoLogoPython } from 'react-icons/io'
import { SkillType } from '@/interfaces/HomepageInterfaces'
import { DiLinux } from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'


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
        name: 'SCSS',
        icon: <IoLogoSass />,
        usedFor: 'Styling websites',
        sinceWhen: 'November 2021'
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
        percentSkill: 75,
        name: 'Bash',
        icon: <SiGnubash />,
        usedFor: 'Automating tasks',
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
        percentSkill: 90,
        name: 'React JS',
        icon: <SiReact />,
        usedFor: 'Building websites',
        sinceWhen: 'October 2021'
    },

    {
        percentSkill: 85,
        name: 'Node JS',
        icon: <SiNodedotjs />,
        usedFor: 'Server side applications',
        sinceWhen: 'December 2021'
    },

    {
        percentSkill: 95,
        name: 'GNU/Linux',
        icon: <DiLinux />,
        usedFor: 'Daily-drive desktop OS',
        sinceWhen: 'October 2022'
    }
]


export {
    languageSkills,
    otherSkills
}