import Button from '../../Common/Button'
import { HeaderText } from './HeaderText'
import { scroller } from 'react-scroll'

const LeftInformations = () => {
   return (
      <section className="left-informations">

         <HeaderText />

         <p>Are you looking for a web developer with passion? I'd like to be a freelancer, or a full time hired dev. Maybe you want to have a full stack web application? Maybe you need a small program? If yes, you have come to the right place. I'm vrecek and this is my portfolio. </p>

         <Button action={ () => scroller.scrollTo('home-about', {smooth: true}) } text='More about me' />

      </section>
   )
}

export default LeftInformations