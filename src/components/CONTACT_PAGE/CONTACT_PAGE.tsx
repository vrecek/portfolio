import React from 'react'
import Form from '../MAIN_PAGE/Contact/Form'
import '../../css/ContactPage.css'
import ContactPageText from './ContactPageText'

const CONTACT_PAGE = () => {
   window.scrollTo(0, 0)

   return (
      <main className="contact-page">

         <ContactPageText />
         <Form />

      </main>
   )
}

export default CONTACT_PAGE