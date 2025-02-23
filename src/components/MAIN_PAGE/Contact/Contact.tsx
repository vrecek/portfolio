import HeaderInfo from '../../Common/HeaderInfo'
import '@/css/Contact.css'
import { FiMail } from 'react-icons/fi'
import Socials from './Socials/Socials'
import MailInfo from '@/components/Common/MailInfo'
import Icon from '@/components/Common/Icon'
import { AiFillContacts } from 'react-icons/ai'


const Contact = ({ cname }: {cname?: string}) => {
   return (
      <section className={`home-contact ${cname}`}>

         <HeaderInfo icon={<FiMail />}>
            Contact
         </HeaderInfo>

         <section className="contact-text">

            <Socials />
            <MailInfo />
            <Icon cname='background-icon' icon={<AiFillContacts />} />

         </section>

      </section>
   )
}


export default Contact