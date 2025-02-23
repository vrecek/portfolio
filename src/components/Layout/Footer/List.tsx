import { NavigateFunction, useNavigate } from 'react-router-dom'


const List = () => {
   const n: NavigateFunction = useNavigate()


   return (
      <section className="lists">

         <ul>
            <li onClick={() => n('/')}>Homepage</li>
            <li onClick={() => n('/projects')}>Projects</li>        
         </ul>

         <ul>
            <li onClick={() => n('/about')}>About me</li>
            <li onClick={() => n('/contact')}>Contact</li>
         </ul>

      </section>
   )
}


export default List