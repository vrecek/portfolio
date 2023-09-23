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

         <HeaderInfo icon={ <FiUserCheck /> } cname='entry-info'>
            Abilities
         </HeaderInfo>

         <div className="container">

            <OneAbility type='website' info='I can create websites on various topics, either frontend or fullstack. It can be single or multi page. To do this i am using Typescript (React JS and Node JS + MongoDB).' what='Web developer' icon={ <CgWebsite /> } />

            <OneAbility type='program' info='I can also create small programs, most likely simple scripts to ease work, or some small apps. Both as a webpage or a standalone program.' what='Programs / Apps' icon={ <FaFileCode /> } />

            <BackgroundIconHandle />

         </div>

      </section>
   )
}

export default Abilities