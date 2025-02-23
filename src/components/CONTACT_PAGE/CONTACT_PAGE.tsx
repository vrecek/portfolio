import '../../css/ContactPage.css'
import Contact from '../MAIN_PAGE/Contact/Contact'


const CONTACT_PAGE = () => {
   window.scrollTo(0, 0)

   
   return (
      <main className="contact-page">
         <Contact cname='contact-page' />
      </main>
   )
}


export default CONTACT_PAGE