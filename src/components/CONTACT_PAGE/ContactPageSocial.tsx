import React from 'react'
import MailDiv from './MailDiv'
import SocialList from './SocialList'

const ContactPageSocial = () => {
   return (
      <section className="contact-text social">

         <h2>Contact me on one of my socials</h2>

         <SocialList />

         <MailDiv />

      </section>
   )
}

export default ContactPageSocial