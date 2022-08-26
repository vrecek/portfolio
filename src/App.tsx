import React from 'react'
import './css/index.css'
import { Route, Routes } from 'react-router-dom'
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import Navigation from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';

function App() {
   return (
      <div className="App">

         <Navigation />
      
         <Routes>

            <Route path='/' element={ <MAIN_PAGE /> } />

         </Routes>

         <Footer />

      </div>
   )
}

export default App;
