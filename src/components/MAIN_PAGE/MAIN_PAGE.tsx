import React from 'react'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

const MAIN_PAGE = () => {
   return (
      <main className="main-page">

         <Header />
         <Projects />
         <Skills />

      </main>
   )
}

export default MAIN_PAGE