import { AiFillDollarCircle, AiFillSave, AiFillWarning, AiFillWechat, AiOutlineApi, AiOutlineCloudServer, AiOutlineDownload } from 'react-icons/ai'
import { BiCog, BiNews, BiPaint, BiWorld } from 'react-icons/bi'
import { DiReact } from 'react-icons/di'
import { IoGameController, IoLogoElectron } from 'react-icons/io5'
import { FaHandsHelping, FaPeopleArrows, FaRobot } from 'react-icons/fa'
import { IoIosMan, IoLogoGameControllerB } from 'react-icons/io'
import { GiClick, GiProgression, GiRobotGrab } from 'react-icons/gi'
import { VscJson } from 'react-icons/vsc'
import { MdAdminPanelSettings, MdOutlineDesignServices, MdOutlinePlusOne, MdOutlineTouchApp, MdSportsScore, MdWifiTetheringErrorRounded } from 'react-icons/md'
import { BsFillMicFill, BsFillMouseFill, BsFillTerminalFill, BsFillKeyboardFill } from 'react-icons/bs'
import { ImTextColor } from 'react-icons/im'
import { SiNextdotjs } from 'react-icons/si'

import weather from '../images/projects/weather.webp'
import poker from '../images/projects/poker.webp'
import chess from '../images/projects/chess.png'
import ttt from '../images/projects/tictactoe.webp'
import blackjack from '../images/projects/blackjack.webp'
import clicker from '../images/projects/clicker.webp'
import vr from '../images/projects/vr.png'
import autoclicker from '../images/projects/autoclicker.png'
import electronicshop from '../images/projects/electronicshop.png'
import myblog from '../images/projects/myblog.png'
import foodshop from '../images/projects/foodshop.webp'
import luxury from '../images/projects/luxury.png'
import houses from '../images/projects/houses.webp'
import fooddelivery from '../images/projects/fooddelivery.webp'
import courses from '../images/projects/courses.png'
import calculator from '../images/projects/calculator.png'
import hangman from '../images/projects/hangman.png'
import clothings from '../images/projects/clothings.png'
import blog from '../images/projects/blog.webp'
import quizzes from '../images/projects/quizzes.png'
import chat from '../images/projects/chat.png'
import resizeapp from '../images/projects/resizeapp.png'
import gym from '../images/projects/gym.webp'
import clickergame from '../images/projects/clickergame.webp'
import mousecolor from '../images/projects/mousecolor.png'
import rapmusic from '../images/projects/rapmusic.webp'
import paint from '../images/projects/paint.png'
import fashionista from '../images/projects/fashionista.webp'
import keytype from '../images/projects/keytype.png'
import platformer from '../images/projects/platformer.png'
import slots from '../images/projects/slots.png'
import newtab from '../images/projects/newtab.webp'
import ytdwn from '../images/projects/ytdwn.png'
import twitchbot from '../images/projects/twitchbot.png'
import ps1 from '../images/projects/ps1.png'
import gencombo from '../images/projects/gencombo.png'
import configs from '../images/projects/configs.png'
import capture from '../images/projects/capture.png'
import discordbot from '../images/projects/discordbot.png'
import cloudstorage from '../images/projects/cloudstorage.png'

import chatreg from '../images/description/chatregister.png'
import chatadd from '../images/description/chatadd.png'
import blogart from '../images/description/blogarticle.png'
import blogcont from '../images/description/blogcontact.png'
import bloghead from '../images/description/blogheader.png'
import clothesdaily from '../images/description/clothesdaily.png'
import clothesprod from '../images/description/clothesprod.png'
import clothesreg from '../images/description/clothesreg.png'
import elecprod from '../images/description/elecprod.png'
import elecbasket from '../images/description/elecbasket.png'
import elecsearch from '../images/description/elecsearch.png'
import vrecblogreg from '../images/description/vrecblogreg.png'
import resizeappoutput from '../images/description/resizeappoutput.png'
import fashbasket from '../images/description/fash_basket.png'
import fashprod from '../images/description/fash_prod.png'
import fashsearch from '../images/description/fash_search.png'
import fashtiles from '../images/description/fash_tiles.png'
import cloudlog from '../images/description/cloudlog.png'
import clouddir from '../images/description/clouddir.png'
import ytdwn_config from '@/images/description/ytdwn_config.png'


import ProjectType from '../interfaces/ProjectInterface'


const PROJECTS: ProjectType[] = [
   {
      id: 'cloud-storage',
      thumbnail: cloudstorage,
      name: "Cloud storage",
      stack: "Fullstack",
      shortPara: "A private storage for the files",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Saving output", icon: <AiOutlineDownload /> },
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> }
      ],
      date: 44,
      repository: 'https://github.com/vrecek/hosting',
      bugs: [],
      description: `Cloud storage for storing different types of files. Uses the MongoDB as a database and the Express as a server framework [[${clouddir}]] [[${cloudlog}]]` 
   },

   {
      id: 'video-recorder',
      thumbnail: capture,
      name: "RTSP recorder",
      stack: "Other",
      shortPara: "RTSP stream camera recorder",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Configurable", icon: <BiCog /> },
         { name: "Recorder", icon: <BsFillMicFill /> },
         { name: "Saving output", icon: <AiOutlineDownload /> }
      ],
      date: 43,
      repository: 'https://github.com/vrecek/video-stream',
      bugs: [],
      description: "Record the RTSP stream, presumably from an IP camera. Offers detection handling, saving it to a file, detection sound, stop/resume record action, etc..."
   },

   {
      id: 'configs',
      thumbnail: configs,
      name: "Config files",
      stack: "Other",
      shortPara: "My configuration files",
      language: ["Bash", "Typescript", "SCSS"],
      type: 'Other',
      tags: [
         { name: "Configurations", icon: <BiCog /> },
      ],
      date: 42,
      repository: 'https://github.com/vrecek/configs',
      bugs: [],
      description: "My config files for the: vim, kitty terminal, zsh, neofetch, vscodium, sysctl, etc... Also contains Typescript/SCSS main files. There is also available complete GNOME setup on Arch linux."
   },

   {
      id: 'discord-bot',
      thumbnail: discordbot,
      name: "My discord bot",
      stack: "Other",
      shortPara: "My all-purpose discord bot",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Automation", icon: <GiRobotGrab /> },
         { name: "Interactivity", icon: <GiClick /> }
      ],
      date: 41,
      repository: 'https://github.com/vrecek/mydiscordbot',
      bugs: [],
      description: "A discord bot that is responsible for various things. Main task is to play music files, as well as sending files"
   },

   {
      id: 'gen-ps1',
      thumbnail: ps1,
      name: "Prompt generator",
      stack: "Frontend",
      shortPara: "Create your own command prompt",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Configurable", icon: <BiCog /> },
         { name: "ReactJS", icon: <DiReact /> }
      ],
      date: 40,
      repository: 'https://github.com/vrecek/ps1-gen',
      liveUrl: 'https://vrecek.github.io/ps1-gen',
      bugs: [],
      description: "Generate your own BASH or ZSH command prompt, or convert one to another. Simple design and visual portray made it easy."
   },

   {
      id: 'generate-combos',
      thumbnail: gencombo,
      name: "Generate combinations",
      stack: "Other",
      shortPara: "Generate possible combinations",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Automation", icon: <GiRobotGrab /> },
         { name: "Dangerous", icon: <AiFillWarning /> }
      ],
      date: 39,
      repository: 'https://github.com/vrecek/generate-combinations',
      bugs: [],
      description: "Generate every possible combination, based on your input values, like: char array, minimum length, maximum length. High values may produce very heavy file and can drain RAM quickly, depending on your PC and the 'BUFFER' value"
   },

   {
      id: 'yt-downloader',
      thumbnail: ytdwn,
      name: "YT downloader",
      stack: "Other",
      shortPara: "Download videos from YouTube",
      language: ["C"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Download", icon: <AiOutlineDownload /> }
      ],
      date: 38,
      repository: 'https://github.com/vrecek/yt-dwn-ncurses',
      bugs: [],
      description: `App that downloads videos from YouTube. Uses 'ncurses' and 'yt-dlp' [[${ytdwn_config}]]`
   },

   {
      id: 'mytwitchbot',
      thumbnail: twitchbot,
      name: "My twitch bot",
      stack: "Other",
      shortPara: "My twitch IRC chat bot",
      language: ["Python"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Automation", icon: <GiRobotGrab /> },
         { name: "Configurable", icon: <BiCog /> }
      ],
      date: 37,
      repository: 'https://github.com/vrecek/mytwitchbot',
      bugs: [],
      description: "A chat bot that utilizes multiprocessing for many different things. It can read chat messages and do with them, what you want"
   },

   {
      id: 'newtab',
      thumbnail: newtab,
      name: "Custom new tab",
      stack: "Frontend",
      shortPara: 'Custom newtab for browsers',
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "ReactJS", icon: <DiReact /> },
         { name: "Helper", icon: <FaHandsHelping /> }
      ],
      date: 36,
      repository: 'https://github.com/vrecek/new_tab',
      liveUrl: 'https://vrecek.github.io/new_tab',
      bugs: ["*Not an app error* Browser may block the search request. This can be bypassed in the extension options, or by tweaking your browser security settings"],
      description: 'Custom new tab for a browser. I use this with a "Custom New Tab Page" extension. Allows for customization'
   },

   {
      id: 'slots',
      thumbnail: slots,
      name: "Casino slots",
      stack: "Frontend",
      shortPara: 'Play a casino slot machine',
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
      ],
      date: 35,
      repository: 'https://github.com/vrecek/slots',
      liveUrl: 'https://vrecek.github.io/slots',
      bugs: [],
      description: 'Win a lot of "money" playing this popular casino game'
   },

   {
      id: 'platformer',
      thumbnail: platformer,
      name: "Platform game",
      stack: "Frontend",
      shortPara: "Regular JS Canvas platform game",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Game',
      tags: [
         { name: "Keyboard", icon: <BsFillKeyboardFill /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Game", icon: <IoGameController /> }
      ],
      date: 34,
      repository: 'https://github.com/vrecek/platformer',
      liveUrl: 'https://vrecek.github.io/platformer',
      bugs: [],
      description: `A simple platform game, in which you need to collect points, avoid enemies and pass through the levels. Full and more detailed description available on a project's github README.md` 
   },

   {
      id: 'keytype',
      thumbnail: keytype,
      name: "Typing test",
      stack: "Frontend",
      shortPara: "Typing test to check your WPM",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Scores", icon: <MdSportsScore /> },
         { name: "ReactJS", icon: <DiReact /> }
      ],
      date: 33,
      repository: 'https://github.com/vrecek/keytype',
      liveUrl: 'https://vrecek.github.io/keytype',
      bugs: [],
      description: `Check your WPM and overall typing speed on this website. It will measure your time and written words. You can also save this on the leaderboard, to keep improving your typing skill` 
   },

   {
      id: 'fashionista',
      thumbnail: fashionista,
      name: "Fashionista shop",
      stack: "Fullstack",
      shortPara: "Fullstack NextJS clothing shop",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Fullstack", icon: <AiOutlineCloudServer /> },
         { name: "Full system", icon: <MdAdminPanelSettings /> },
         { name: "NextJS", icon: <SiNextdotjs /> }
      ],
      date: 32,
      repository: 'https://github.com/vrecek/shopping',
      bugs: [],
      description: `Fullstack NextJS e-commence application. Includes every option that normal and functioning online shop should need, for example  the order process. Uses the MongoDB as a database and the express as a custom Next server. [[${fashbasket}]] [[${fashprod}]] [[${fashsearch}]] [[${fashtiles}]]` 
   },

   {
      id: 'paint',
      thumbnail: paint,
      name: "Paint application",
      stack: "Other",
      shortPara: "Electron drawing application",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'App',
      tags: [
         { name: "ElectronJS", icon: <IoLogoElectron /> },
         { name: "Interactivity", icon: <GiClick /> },
         { name: "GUI", icon: <MdOutlineDesignServices /> }
      ],
      date: 31,
      repository: 'https://github.com/vrecek/paint',
      bugs: ["Fill tool takes long time to finish"],
      description: `Drawing application made using Electron JS. It has 6 tools: brush, rectangle, circle, rubber, line and fill. It also has options like changing thickess, color and fill mode. 
      
      Install: 
      1. Clone repository
      2. Run npm install
      3. Run npm run package
      4. Copy 'images' directory to out/paint* directory
      5. Run paint.exe`
   },

   {
      id: 'rap-music',
      thumbnail: rapmusic,
      name: "Polish rap music",
      stack: "Frontend",
      shortPara: "Explore polish rap music",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Hardcoded data", icon: <VscJson /> },
         { name: "Real data", icon: <BiWorld /> },
         { name: "Frontend", icon: <BiPaint /> }
      ],
      date: 30,
      repository: 'https://github.com/vrecek/rapmusic',
      liveUrl: 'https://vrecek.github.io/rapmusic',
      bugs: [],
      description: "Website about polish rap music. There are listed artists with their tracks. Also contains 'blog' with dummy articles. All artists and tracks are real and can be found on the YouTube"
   },

   {
      id: 'mouse-color',
      thumbnail: mousecolor,
      name: "Mouse illumination",
      stack: "Other",
      shortPara: "Change steelseries mouse illumination",
      language: ["Bash"],
      type: 'App',
      tags: [
         { name: "Command line", icon: <BsFillTerminalFill /> },
         { name: "Device effect", icon: <BsFillMouseFill /> },
         { name: "Helper", icon: <FaHandsHelping /> }
      ],
      date: 28,
      repository: 'https://github.com/vrecek/mouse-color',
      bugs: [],
      description: "Change your steelseries mouse illumination. This was made by using rivalcfg python library. List of all informations, eg. every supported device, are in rivalcfg's repository which is here: https://github.com/flozz/rivalcfg"
   },

   {
      id: 'clicker-game',
      thumbnail: clickergame,
      name: "Full clicker game",
      stack: "Frontend",
      shortPara: "Advanced version of a clicker game",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Game',
      tags: [
         { name: "Game", icon: <IoGameController /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Progression", icon: <GiProgression /> }
      ],
      date: 27,
      repository: 'https://github.com/vrecek/clicker',
      liveUrl: 'https://vrecek.github.io/clicker/',
      bugs: [],
      description: `Play a clicker game. Buy upgrades, get new levels and do quests. Some features are unlocked when you hit a certaing level.`
   },

   {
      id: 'gym',
      thumbnail: gym,
      name: "Gym website",
      stack: "Frontend",
      shortPara: "Gym's static website",
      language: ["Typescript", "SCSS", "HTML"],
      type: 'Website',
      tags: [
         { name: "Lorem ipsum", icon: <ImTextColor /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Hardcoded data", icon: <VscJson /> }
      ],
      date: 26,
      repository: 'https://github.com/vrecek/gymstick',
      liveUrl: 'https://vrecek.github.io/gymstick/',
      bugs: [],
      description: `Gym website that is created using React. It contains pages like a shop and a blog which are using harcoded data. It is frontend only. It also has basic features like slider, dropdown menus and a aside navigation.`
   },

   {
      id: 'image-resizer',
      thumbnail: resizeapp,
      name: "Image resizer app",
      stack: "Other",
      shortPara: 'Electron resizer application',
      language: ["Typescript", "SCSS", "HTML", "Javascript"],
      type: 'App',
      tags: [
         { name: "GUI", icon: <MdOutlineDesignServices /> },
         { name: "ElectronJS", icon: <IoLogoElectron /> },
         { name: "Download", icon: <AiOutlineDownload /> }
      ],
      date: 25,
      repository: 'https://github.com/vrecek/image-resizer',
      bugs: [],
      description: `Image resizer app built in Electron. It has simple interface. Select image and provide X value (if Y value is present, aspect ratio will be ignored). Then you can download your resized image. [[${resizeappoutput}]]`
   },

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
         { name: "Communication", icon: <FaPeopleArrows /> }
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
      bugs: [],
      description: `My second blog about tutorials / news. It focuses on a programming topics. Uses MongoDB. [[${bloghead}]] [[${blogart}]] [[${blogcont}]]`
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
         { name: "Single screen", icon: <IoIosMan /> }
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
         { name: "Single screen", icon: <IoIosMan /> }
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
      shortPara: "Record the sound from your microphone",
      language: ["HTML", "Typescript", "CSS"],
      type: 'App',
      tags: [
         { name: "Recorder", icon: <BsFillMicFill /> },
         { name: "Frontend", icon: <BiPaint /> },
         { name: "Download", icon: <AiOutlineDownload /> }
      ],
      date: 3,
      repository: 'https://github.com/vrecek/voice-recorder',
      liveUrl: 'https://vrecek.github.io/voice-recorder/',
      bugs: [],
      description: 'Record your voice. You can also save it on your device.'
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
      bugs: ['Cookie popup does not dissapear'],
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
      name: "Old site #3",
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
      name: "Old site #2",
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
      name: "Old site #1",
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