import React from 'react'
import { AiFillContacts } from 'react-icons/ai'
import BackgroundIcon from '../../Common/BackgroundIcon'
import ContactText from './ContactText/ContactText'
import Socials from './Socials/Socials'

const Text = ({showSocials}: {showSocials?: boolean}) => {
   return (
      <section className="contact-text">

         <ContactText />

         {
            showSocials
               && <Socials />
         }

         <BackgroundIcon icon={ <AiFillContacts /> } />

      </section>
   ) 
}

export default Text