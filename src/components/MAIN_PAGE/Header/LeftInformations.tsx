import React from 'react'
import Button from '../../Common/Button'
import { HeaderText } from './HeaderText'

const LeftInformations = () => {
   return (
      <section className="left-informations">

         <HeaderText />
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab, sunt asperiores doloremque reprehenderit labore blanditiis laboriosam repellat atque rem. Asperiores inventore reiciendis autem earum ipsa porro.</p>
         <Button text='More about me' />

      </section>
   )
}

export default LeftInformations