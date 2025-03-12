import HeaderInfo from '../../Common/HeaderInfo'
import '../../../css/Abilities.css'
import { FiUserCheck } from 'react-icons/fi'
import OneAbility from './OneAbility'
import { FaFileCode } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import handleViewport from 'react-in-viewport'
import BackgroundIconViewport from './BackgroundIconViewport'


const Abilities = () => {
   const BackgroundIconHandle = handleViewport(BackgroundIconViewport)


   return (
      <section className="home-abilities">

         <HeaderInfo icon={<FiUserCheck />}>
            Abilities
         </HeaderInfo>

         <section className="container">

            <OneAbility type='Website' info='Im able to create websites, either frontend or backend. To accomplish this, I use Typescript (ReactJS + NodeJS + MongoDB)' what='Web developer' icon={ <CgWebsite /> } />

            <OneAbility type='App' info='Im also able to create small programs, most likely simple scripts to ease work, or some small apps' what='Programs / Apps' icon={ <FaFileCode /> } />

            <BackgroundIconHandle />

         </section>

      </section>
   )
}


export default Abilities