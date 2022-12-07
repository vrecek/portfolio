import { AiFillDollarCircle, AiFillSave, AiFillWarning, AiFillWechat, AiOutlineApi, AiOutlineCloudServer } from 'react-icons/ai'
import { BiCog, BiNews, BiPaint } from 'react-icons/bi'
import { DiReact } from 'react-icons/di'
import { IoGameController } from 'react-icons/io5'
import { FaPeopleArrows, FaRobot } from 'react-icons/fa'
import { IoIosMan, IoLogoGameControllerB } from 'react-icons/io'
import { GiClick, GiRobotGrab } from 'react-icons/gi'
import { VscJson } from 'react-icons/vsc'
import { MdAdminPanelSettings, MdFileDownloadOff, MdOutlineDesignServices, MdOutlinePlusOne, MdOutlineTouchApp, MdSportsScore, MdWifiTetheringErrorRounded } from 'react-icons/md'
import { BsFillMicFill, BsFillTerminalFill } from 'react-icons/bs'
import { TbReplace } from 'react-icons/tb'
import { ImTextColor } from 'react-icons/im'
import {TiCloudStorageOutline} from 'react-icons/ti'

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
import courses from '../images/projects/courses.png'
import calculator from '../images/projects/calculator.png'
import hangman from '../images/projects/hangman.png'
import clothings from '../images/projects/clothings.png'
import cm from '../images/projects/cm.png'
import blog from '../images/projects/blog.png'
import quizzes from '../images/projects/quizzes.png'
import chat from '../images/projects/chat.png'

import chatreg from '../images/description/chatregister.png'
import chatadd from '../images/description/chatadd.png'
import blogart from '../images/description/blogarticle.png'
import blogcont from '../images/description/blogcontact.png'
import bloghead from '../images/description/blogheader.png'
import cm1 from '../images/description/cm1.png'
import cm2 from '../images/description/cm2.png'
import clothesdaily from '../images/description/clothesdaily.png'
import clothesprod from '../images/description/clothesprod.png'
import clothesreg from '../images/description/clothesreg.png'
import elecprod from '../images/description/elecprod.png'
import elecbasket from '../images/description/elecbasket.png'
import elecsearch from '../images/description/elecsearch.png'
import vrecblogreg from '../images/description/vrecblogreg.png'

import ProjectType from '../interfaces/ProjectInterface'


const PROJECTS: ProjectType[] = [
   {
      id: 'live-chat',
      thumbnail: chat,
      name: "Real-time chat",
      stack: "Fullstack",
      shortPara: 'Chat online with your friends',
      language: ["Typescript", "SCSS", "HTML"],
      type: 'App',
      tags: [
         { name: "Real-time", icon: <AiFillWechat /> },
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Communication", icon: <FaPeopleArrows /> },
      ],
      date: 24,
      repository: 'https://github.com/vrecek/chat',
      bugs: [],
      description: `Chat using this real-time chat app. [[${chatreg}]] Create account [[${chatadd}]] Add your registered friend, and finally make a conversation!`
   },

   {
      id: 'quizzes',
      thumbnail: quizzes,
      name: "Online quizzes",
      stack: "Frontend",
      shortPara: 'Play quizzes of a different categories',
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Game',
      tags: [
         { name: "Progress", icon: <AiFillSave /> },
         { name: "Scores", icon: <MdSportsScore /> },
         { name: "Replayability", icon: <IoLogoGameControllerB /> },
      ],
      date: 23,
      repository: 'https://github.com/vrecek/quizzys',
      liveUrl: 'https://vrecek.github.io/quizzys',
      bugs: [],
      description: 'Online quizzes. Choose maximum questions, category, then play! Time is limited. Correct answers will be summed and displayed'
   },

   {
      id: 'second-blog',
      thumbnail: blog,
      name: "Second online blog",
      stack: "Fullstack",
      shortPara: 'Second and better version of a blog',
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Blog", icon: <BiNews /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> },
      ],
      date: 22,
      repository: 'https://github.com/vrecek/blog',
      // liveUrl: 'https://react-web-blog-heroku.herokuapp.com/',
      bugs: [],
      description: `My second blog about tutorials / news. It focuses on a programming topics. Uses MongoDB. [[${bloghead}]] [[${blogart}]] [[${blogcont}]]`
   },

   {
      id: 'credentials-manager',
      thumbnail: cm,
      name: "Credentials manager",
      stack: "Backend",
      shortPara: 'Store and read your data objects',
      language: ["Typescript"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Database storage", icon: <TiCloudStorageOutline /> }
      ],
      date: 21,
      repository: 'https://github.com/vrecek/credential-manager',
      bugs: [],
      description: `Create, read and delete data, presumably credentials. NO HASHING! Required MongoDB database [[${cm1}]] [[${cm2}]]`
   },

   {
      id: 'clothing-shop',
      thumbnail: clothings,
      name: "Clothing shop",
      stack: "Fullstack",
      shortPara: 'Fullstack e-commence clothing shop',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "E-commence", icon: <AiFillDollarCircle /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> }
      ],
      date: 20,
      repository: 'https://github.com/vrecek/clothing',
      liveUrl: 'https://react-clothing-shop-heroku.herokuapp.com/',
      bugs: [],
      description: `Online e-commence clothing shop. Uses MongoDB. Includes "purchasing" products when you add them to the basket. [[${clothesdaily}]] [[${clothesprod}]] [[${clothesreg}]]`
   },

   {
      id: 'hangman',
      thumbnail: hangman,
      name: "Hangman game",
      stack: "Frontend",
      shortPara: 'Regular responsive hangman game',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Game',
      tags: [
         { name: "ReactJS", icon: <DiReact /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Game", icon: <IoGameController /> }
      ],
      date: 19,
      repository: 'https://github.com/vrecek/hangman',
      liveUrl: 'https://vrecek.github.io/hangman/',
      bugs: [],
      description: 'Regular hangman game. Words have maximum 15 characters. Win or lose.'
   },

   {
      id: 'calculator',
      thumbnail: calculator,
      name: "Basic calculator",
      stack: "Frontend",
      shortPara: 'Regular, responsive calculator with a basic arithmetics',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'App',
      tags: [
         { name: "ReactJS", icon: <DiReact /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Interactivity", icon: <GiClick /> }
      ],
      date: 18,
      repository: 'https://github.com/vrecek/calculator',
      liveUrl: 'https://vrecek.github.io/calculator/',
      bugs: ["No negative numbers"],
      description: `Online calculator. It offers basic arithmetic operations.`
   },

   {
      id: 'courses',
      thumbnail: courses,
      name: "Online courses",
      stack: "Frontend",
      shortPara: 'Multipage about online courses, local storage used as a "backend"',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Website',
      tags: [
         { name: "Fake backend", icon: <MdWifiTetheringErrorRounded /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Hardcoded data", icon: <VscJson /> },
      ],
      date: 17,
      repository: 'https://github.com/vrecek/courses',
      liveUrl: 'https://vrecek.github.io/courses/',
      bugs: [],
      description: 'Frontend, online courses. Local storage is imitating backend. You can login or register and then buy some course'
   },

   {
      id: 'weather-app',
      thumbnail: weather,
      name: "Current weather",
      stack: "Frontend",
      shortPara: 'Displays weather information on a current city you search for',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'App',
      tags: [
         { name: "ReactJS", icon: <DiReact /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "API", icon: <AiOutlineApi /> }
      ],
      date: 16,
      repository: 'https://github.com/vrecek/weather-app',
      liveUrl: 'https://vrecek.github.io/weather-app/',
      bugs: ["Sometimes user's location is not detected"],
      description: 'Online weather app. Displays basic informations about city you searched for. Different images/styles for a different weather conditions.'
   },

   {
      id: 'holdem-poker',
      thumbnail: poker,
      name: "Texas Hold'em Poker",
      stack: "Frontend",
      shortPara: 'Play VS computer for a high stakes in a poker game.',
      language: ["HTML", "Typescript", "SCSS"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Computer", icon: <FaRobot /> }
      ],
      date: 12,
      repository: 'https://github.com/vrecek/poker',
      liveUrl: 'https://vrecek.github.io/poker/',
      bugs: ['Instant enemy fold', 'Buttons do not dissapear after finish'],
      description: 'Card game - Texas Holdem Poker. Bet money and play against computer.'
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
      date: 4,
      repository: 'https://github.com/vrecek/chess',
      liveUrl: 'https://vrecek.github.io/chess/',
      bugs: ['Some path problems', 'Some path problems when check'],
      description: 'Chess game. It does not have any kind of AI.'
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
      date: 5,
      repository: 'https://github.com/vrecek/TicTacToe',
      liveUrl: 'https://vrecek.github.io/TicTacToe/',
      bugs: [],
      description: 'Tic tac toe game. It does not have any kind of AI. Game contains menu where you can change name for players.'
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
      date: 6,
      repository: 'https://github.com/vrecek/blackjack',
      liveUrl: 'https://vrecek.github.io/blackjack/',
      bugs: [],
      description: 'Card game - blackjack. Play against computer. Choose your bet and pray for luck.'
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
      date: 2,
      repository: 'https://github.com/vrecek/adventure-clicker',
      liveUrl: 'https://vrecek.github.io/adventure-clicker/',
      bugs: ['No support for mobile phones'],
      description: 'Clicker game. You can buy upgrades and use special abilities which have cooldowns. Small screen is not supported.'
   },

   {
      id: 'voice-recorder',
      thumbnail: vr,
      name: "Voice recorder",
      stack: "Frontend",
      shortPara: "Record any sound from your microphone",
      language: ["HTML", "Typescript", "CSS"],
      type: 'App',
      tags: [
         { name: "Recorder", icon: <BsFillMicFill /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "No download", icon: <MdFileDownloadOff /> }
      ],
      date: 3,
      repository: 'https://github.com/vrecek/voice-recorder',
      liveUrl: 'https://vrecek.github.io/voice-recorder/',
      bugs: [],
      description: 'Record your voice and listen it. You cannot save it on your device.'
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
      date: 14,
      repository: 'https://github.com/vrecek/resize-images',
      bugs: [],
      description: 'Python image resizer. Enter x and y and wait. Only images in a current directory will be resized. Original files will be copied to a new directory.'
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
      date: 11,
      repository: 'https://github.com/vrecek/auto-clicker',
      bugs: [],
      description: 'Clicker with a GUI. Select mouse click speed, hotkey and press Start.'
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
      date: 10,
      repository: 'https://github.com/vrecek/encryptor',
      bugs: [],
      description: 'Encrypt and decrypt your files and images. It works recursively, which means files in a directories will be changed! Do not use it if you do not know what you are doing.'
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
      date: 15,
      repository: 'https://github.com/vrecek/electronic-shop',
      // liveUrl: 'https://react-electronic-shop-heroku.herokuapp.com/',
      bugs: ['Cookie popup do not dissapear'],
      description: `E-commence shop. It offers any kind of electronics, kitchen equipment etc. Uses MongoDB. [[${elecprod}]] [[${elecbasket}]] [[${elecsearch}]]`
   },

   {
      id: 'blog',
      thumbnail: myblog,
      name: "Online blog",
      stack: "Fullstack",
      shortPara: "Fullstack blog about all sort of news / tutorials from computer world",
      language: ["HTML", 'Typescript', 'SCSS'],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Blog", icon: <BiNews /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> },
      ],
      date: 9,
      repository: 'https://github.com/vrecek/vrec-blog',
      // liveUrl: 'https://react-vrec-blog-heroku.herokuapp.com/',
      bugs: [],
      description: `Online, fullstack blog. It focuses on a programming topics. Uses MongoDB. [[${vrecblogreg}]]`
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
         { name: "Lorem ipsum", icon: <ImTextColor /> },
         { name: "Hardcoded data", icon: <VscJson /> },
      ],
      date: 13,
      repository: 'https://github.com/vrecek/food-shop',
      liveUrl: 'https://vrecek.github.io/food-shop/',
      bugs: ['Bad performance'],
      description: 'Frontend website, focuses on ordering food. You can add products to cart and "order" them.'
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
      date: 8,
      repository: 'https://github.com/vrecek/luxury-clothes',
      liveUrl: 'https://vrecek.github.io/luxury-clothes/',
      bugs: [],
      description: 'Unfinished project about clothings.'
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
      date: 7,
      repository: 'https://github.com/vrecek/house-services',
      liveUrl: 'https://vrecek.github.io/house-services/',
      bugs: ['Images are too heavy'],
      description: 'Unfinished project about clothings.'
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
      date: 1,
      repository: 'https://github.com/vrecek/react-food-delivery',
      liveUrl: 'https://vrecek.github.io/react-food-delivery/',
      bugs: [],
      description: 'First, single-page website'
   }
]

const PROJECTS_LEN: number = PROJECTS.length

export default PROJECTS
export { PROJECTS_LEN }