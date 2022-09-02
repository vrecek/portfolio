import React from 'react'
import { AiFillContacts } from 'react-icons/ai'
import BackgroundIcon from '../../Common/BackgroundIcon'

const Text = () => {
   return (
      <section className="contact-text">

         <h2>Contact me directly by sending the e-mail</h2>

         <p>Do you want to send me a message, or you have any business? Then please contact me through this form. I will recieve your message and I will read it.</p>

         <BackgroundIcon icon={ <AiFillContacts /> } />

      </section>
   ) 
}

export default Text