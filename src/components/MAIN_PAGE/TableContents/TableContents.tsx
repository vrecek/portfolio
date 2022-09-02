import React from 'react'
import '../../../css/TableContents.css'
import { AsideTable } from '../../../interfaces/HomepageInterfaces'
import ExpandArrow from './ExpandArrow'
import { scroller } from 'react-scroll'

const TableContents = () => {
   const links: AsideTable[] = [
      { urlClass: 'home-header', name: 'Header intro' },
      { urlClass: 'home-projects', name: 'My projects' },
      { urlClass: 'home-skills', name: 'My skills' },
      { urlClass: 'home-about', name: 'About me' },
      { urlClass: 'home-contact', name: 'Contact me' },
      { urlClass: 'layout-footer', name: 'Footer' },
   ]

   return (
      <aside className="table-contents">

         <h1>Table of contents</h1>

         <ul>
            {
               links.map((x, i) => (
                  <li onClick={ () => scroller.scrollTo(x.urlClass, {}) } key={ i }>
                     { x.name }
                  </li>
               ))
            }
         </ul>

         <ExpandArrow />

      </aside>
   )
}

export default TableContents