import { Route, Routes } from 'react-router-dom'
import ArrowTop from './components/Layout/ArrowTop'
import Footer from './components/Layout/Footer/Footer'
import Navigation from './components/Layout/Navigation/Navigation'
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE'
import CONTACT_PAGE from './components/CONTACT_PAGE/CONTACT_PAGE'
import ABOUT_PAGE from './components/ABOUT_PAGE/ABOUT_PAGE'
import PROJECTS_PAGE from './components/PROJECTS_PAGE/PROJECTS_PAGE'
import ONE_PROJECT_PAGE from './components/ONE_PROJECT_PAGE/ONE_PROJECT_PAGE'
import './css/index.css'
import './css/SmallProject.css'


function App() {
    return (
        <>

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

        </>
    )
}


export default App
