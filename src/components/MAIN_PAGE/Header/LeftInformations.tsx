import Button from '../../Common/Button'
import HeaderText from './HeaderText'
import { scroller } from 'react-scroll'


const LeftInformations = () => {
   return (
      <section className="left-informations">

         <HeaderText />

         <p>It is not a coincidence you're on this site. Are you interested for a web application? Maybe in programming in general? If yes, you came to the right place. I'm <span>vrecek</span> and this is my portfolio. </p>

         <Button action={() => scroller.scrollTo('home-about', {smooth: true})} text='More about me' />

      </section>
   )
}


export default LeftInformations