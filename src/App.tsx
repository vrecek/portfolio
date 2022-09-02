import React from 'react'
import './css/index.css'
import { Route, Routes } from 'react-router-dom'
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import Navigation from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';
import ArrowTop from './components/Layout/ArrowTop';
import CONTACT_PAGE from './components/CONTACT_PAGE/CONTACT_PAGE';
import PROJECTS_PAGE from './components/PROJECTS_PAGE/PROJECTS_PAGE';
import ONE_PROJECT_PAGE from './components/ONE_PROJECT_PAGE/ONE_PROJECT_PAGE';
import ABOUT_PAGE from './components/ABOUT_PAGE/ABOUT_PAGE';

function App() {
   return (
      <div className="App">

         <Navigation />
         
      
         <Routes>

            <Route path='/' element={ <MAIN_PAGE /> } />
            <Route path='/contact' element={ <CONTACT_PAGE /> } />
            <Route path='/about' element={ <ABOUT_PAGE /> } />
            <Route path='/projects' element={ <PROJECTS_PAGE /> } />
            <Route path='/project/:id' element={ <ONE_PROJECT_PAGE /> } />

         </Routes>


         <Footer />

         <ArrowTop />

      </div>
   )
}

export default App;
