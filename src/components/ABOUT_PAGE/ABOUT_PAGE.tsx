import '@/css/AboutPage.css'
import About from '../MAIN_PAGE/About/About'


const ABOUT_PAGE = () => {
   window.scrollTo(0, 0)


   return (
      <main className="about-page">
         <About cname='about-page' />
      </main>
   )
}


export default ABOUT_PAGE