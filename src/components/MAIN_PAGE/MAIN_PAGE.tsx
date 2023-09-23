import Abilities from './Abilities/Abilities'
import About from './About/About'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import TableContents from './TableContents/TableContents'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <main className="main-page">

         <Header />
         <Projects />
         <Abilities />
         <Skills />
         <About />
         <Contact />
         <TableContents />

      </main>
   )
}

export default MAIN_PAGE