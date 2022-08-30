import { AiFillDollarCircle, AiFillShopping, AiFillWarning, AiOutlineApi, AiOutlineCloudServer } from 'react-icons/ai'
import { BiCog, BiNews, BiPaint } from 'react-icons/bi'
import { DiReact } from 'react-icons/di'
import { IoGameController } from 'react-icons/io5'
import { FaRobot } from 'react-icons/fa'
import { IoIosMan } from 'react-icons/io'
import { GiRobotGrab } from 'react-icons/gi'
import { VscJson } from 'react-icons/vsc'
import { MdAdminPanelSettings, MdFileDownloadOff, MdOutlineDesignServices, MdOutlinePlusOne, MdOutlineTouchApp } from 'react-icons/md'
import { BsFillMicFill, BsFillTerminalFill } from 'react-icons/bs'
import { TbReplace } from 'react-icons/tb'

import weather from '../images/projects/weather.png'
import poker from '../images/projects/poker.png'
import chess from '../images/projects/chess.png'
import ttt from '../images/projects/tictactoe.png'
import blackjack from '../images/projects/blackjack.png'
import clicker from '../images/projects/clicker.png'
import vr from '../images/projects/vr.png'
import resize from '../images/projects/resize.png'
import autoclicker from '../images/projects/autoclicker.png'
import encrypt from '../images/projects/encrypt.png'
import electronicshop from '../images/projects/electronicshop.png'
import myblog from '../images/projects/myblog.png'
import foodshop from '../images/projects/foodshop.png'
import luxury from '../images/projects/luxury.png'
import houses from '../images/projects/houses.png'
import fooddelivery from '../images/projects/fooddelivery.png'

import ProjectType from '../interfaces/ProjectInterface'
import { ImTextColor } from 'react-icons/im'


const PROJECTS: ProjectType[] = [
   {
      id: 'weather-app',
      thumbnail: weather,
      name: "Current weather application",
      stack: "Frontend",
      shortPara: 'Displays weather information on a current city you search for',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'App',
      tags: [
         { name: "ReactJS", icon: <DiReact /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "API", icon: <AiOutlineApi /> }
      ],
      date: 16
   },

   {
      id: 'holdem-poker',
      thumbnail: poker,
      name: "Texas Hold'em Poker game",
      stack: "Frontend",
      shortPara: 'Play VS computer for a high stakes in a poker game.',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Computer", icon: <FaRobot /> }
      ],
      date: 12
   },

   {
      id: 'chess',
      thumbnail: chess,
      name: "Basic chess game",
      stack: "Frontend",
      shortPara: 'Play chess game with a friend on a same device',
      language: ["HTML", "Typescript", "CSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "One screen", icon: <IoIosMan /> }
      ],
      date: 4
   },

   {
      id: 'tictactoe',
      thumbnail: ttt,
      name: "TicTacToe game",
      stack: "Frontend",
      shortPara: 'TicTacToe game with menu and options like saving score, playing sound, player names.',
      language: ["HTML", "Javascript", "CSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "One screen", icon: <IoIosMan /> }
      ],
      date: 5
   },

   {
      id: 'blackjack',
      thumbnail: blackjack,
      name: "Blackjack card game",
      stack: "Frontend",
      shortPara: 'Blackjack game versus a computer. Rules are the same as the original',
      language: ["HTML", "Typescript", "CSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Computer", icon: <FaRobot /> }
      ],
      date: 6
   },

   {
      id: 'clicker',
      thumbnail: clicker,
      name: "Basic clicker game",
      stack: "Frontend",
      shortPara: "Play a clicker game with basic upgrades and bonuses common to a clicker's 'genre'",
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Addicting", icon: <MdOutlineTouchApp /> }
      ],
      date: 2
   },

   {
      id: 'voice-recorder',
      thumbnail: vr,
      name: "Voice recorder",
      stack: "Frontend",
      shortPara: "Record any sound from your microphone and start listening it.",
      language: ["HTML", "Typescript", "CSS"],
      type: 'App',
      tags: [
         { name: "Recorder", icon: <BsFillMicFill /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "No download", icon: <MdFileDownloadOff /> }
      ],
      date: 3
   },

   {
      id: 'resize-images',
      thumbnail: resize,
      name: "Image resizer",
      stack: "Other",
      shortPara: "Resize any images in a current directory by a percent value",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Overwriting", icon: <TbReplace /> },
         { name: "Automation", icon: <GiRobotGrab /> }
      ],
      date: 14
   },

   {
      id: 'auto-clicker',
      thumbnail: autoclicker,
      name: "Auto clicker",
      stack: "Other",
      shortPara: "Configurable auto clicker to help with some tasks that require clicking",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "GUI", icon: <MdOutlineDesignServices /> },
         { name: "Configurable", icon: <BiCog /> },
         { name: "Automation", icon: <GiRobotGrab /> }
      ],
      date: 11
   },

   {
      id: 'encryptor',
      thumbnail: encrypt,
      name: "File encryptor",
      stack: "Other",
      shortPara: "Encrypt and decrypt text files and images recursively, starting from current directory",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Dangerous", icon: <AiFillWarning /> },
         { name: "Overwriting", icon: <TbReplace /> },
         { name: "Command line", icon: <BsFillTerminalFill /> },
      ],
      date: 10
   },

   {
      id: 'electronic-shop',
      thumbnail: electronicshop,
      name: "E-commence electronic shop",
      stack: "Fullstack",
      shortPara: "Fullstack e-commence shop with all necessary things every shop should have",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "E-commence", icon: <AiFillDollarCircle /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> },
      ],
      date: 15
   },

   {
      id: 'personal-blog',
      thumbnail: myblog,
      name: "My personal blog",
      stack: "Fullstack",
      shortPara: "Fullstack blog about all sort of news / tutorials from computer world",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Blog", icon: <BiNews /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> },
      ],
      date: 9
   },

   {
      id: 'foodshop',
      thumbnail: foodshop,
      name: "Ordering food website",
      stack: "Frontend",
      shortPara: "Working, frontend only foodshop, which is using hardcoded data",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Shop", icon: <AiFillShopping /> },
         { name: "Hardcoded data", icon: <VscJson /> },
      ],
      date: 13
   },

   {
      id: 'luxury',
      thumbnail: luxury,
      name: "Luxury clothes shop",
      stack: "Frontend",
      shortPara: "Single page, frontend website about clothing. Basic design and small.",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Single page", icon: <MdOutlinePlusOne/> },
         { name: "Lorem ipsum", icon: <ImTextColor /> },
      ],
      date: 8
   },

   {
      id: 'house-services',
      thumbnail: houses,
      name: "House services website",
      stack: "Frontend",
      shortPara: "Single page, frontend website about houses.",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Single page", icon: <MdOutlinePlusOne/> },
         { name: "Lorem ipsum", icon: <ImTextColor /> },
      ],
      date: 7
   },

   {
      id: 'food-delivery',
      thumbnail: fooddelivery,
      name: "Food delivery website",
      stack: "Frontend",
      shortPara: "Single page, frontend website about ordering food.",
      language: ["HTML", 'Javascript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Single page", icon: <MdOutlinePlusOne/> },
         { name: "Lorem ipsum", icon: <ImTextColor /> },
      ],
      date: 1
   }
]

const PROJECTS_LEN: number = PROJECTS.length

export default PROJECTS
export { PROJECTS_LEN }