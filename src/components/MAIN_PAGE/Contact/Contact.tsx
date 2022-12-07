import React from 'react'
import HeaderInfo from '../../Common/HeaderInfo'
import '../../../css/Contact.css'
import { FiMail } from 'react-icons/fi'
import Text from './Text'
import Form from './Form'

const Contact = () => {
   return (
      <section className="home-contact">

         <HeaderInfo icon={ <FiMail /> } cname='entry-info'>
            Contact
         </HeaderInfo>

         <div className="wrap">

            <Text showSocials={true} />
            <Form />

         </div>

      </section>
   )
}

export default Contact