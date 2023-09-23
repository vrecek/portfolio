import { BsGithub } from 'react-icons/bs'
import { SocialListType } from '../../interfaces/ContactInterfaces'

const SocialList = () => {
   const list: SocialListType[] = [
      { icon: <BsGithub />, text: 'Github', url: 'https://github.com/vrecek' }
   ]

   return (
      <ul>

         {
            list.map((x, i) => (
               <li onClick={ () => window.open(x.url, '_blank') } key={ i }>

                  <h4>{ x.text }</h4> 
                  <span>{ x.icon }</span>

               </li>
            ))
         }

      </ul>
   )
}

export default SocialList