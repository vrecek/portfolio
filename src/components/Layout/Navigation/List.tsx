import { useNavigate } from 'react-router-dom'
import { NavigationList } from '../../../interfaces/NavigationInterfaces'


const List = () => {
   const n = useNavigate()

   const list: NavigationList[] = [
      { name: 'Homepage', url: '/' },
      { name: 'Contact', url: '/contact' },
      { name: 'Projects', url: '/projects', cname: 'mark' }
   ]


   return (
      <ul>
         {
            list.map((x, i) => (
               <li onClick={() => n(x.url)} key={i} className={x.cname ?? ''}>
                  {x.name}
               </li>
            ))
         }
      </ul>
   )
}


export default List