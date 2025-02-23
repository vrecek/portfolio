import { HeaderType } from '../../interfaces/CommonInterfaces'
import Icon from './Icon'


const HeaderInfo = ({ children, icon }: HeaderType) => {
   return (
      <div className='header-info'>

         <p>
            <span>&#60;</span>
            {children}
            <span>/&#62;</span>
         </p>

         { 
            icon && 
            <Icon icon={icon} cname='icon' />
         }

      </div>
   )
}


export default HeaderInfo