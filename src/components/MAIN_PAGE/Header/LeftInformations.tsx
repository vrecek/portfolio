import React from 'react'
import Button from '../../Common/Button'
import { HeaderText } from './HeaderText'

const LeftInformations = () => {
   return (
      <section className="left-informations">

         <HeaderText />

         <p>Are you looking for a web developer with passion? I'd like to be a freelancer, or a full time hired dev. Maybe you want to have a full stack web application? Maybe you need a small program? If yes, you have come to the right place. I'm vrecek and this is my portfolio. </p>

         <Button text='More about me' />

      </section>
   )
}

export default LeftInformations