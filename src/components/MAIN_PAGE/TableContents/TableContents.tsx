import TableContentsObject from '@/data/TABLE_CONTENTS'
import '@/css/TableContents.css'
import ExpandArrow from './ExpandArrow'
import { scroller } from 'react-scroll'
import Socials from '../Contact/Socials/Socials'
import toggleTable from '@/utils/asideTableToggler'


const TableContents = () => {
   const select_fn = (e: React.MouseEvent, id: string): void => {
      scroller.scrollTo(id, {})
      toggleTable(e.currentTarget.parentElement!.parentElement!.children[3] as HTMLElement)
   }


   return (
      <aside className="table-contents">

         <p className='header'>Table of contents</p>

         <ul>
            {
               TableContentsObject.map((x, i) => (
                  <li onClick={(e) => select_fn(e, x.urlClass)} key={i}>
                     {x.name}
                  </li>
               ))
            }
         </ul>

         <Socials />

         <ExpandArrow />

      </aside>
   )
}


export default TableContents