import React from 'react'
import MailInfo from '../Common/MailInfo'
import Socials from '../MAIN_PAGE/Contact/Socials/Socials'
import Text from '../MAIN_PAGE/Contact/Text'

const ContactPageText = () => {
   return (
      <section className="contact-text">

         <Text />

         <h3>OR</h3>
         
         <Socials />
         <MailInfo />

      </section>
   )
}

export default ContactPageText