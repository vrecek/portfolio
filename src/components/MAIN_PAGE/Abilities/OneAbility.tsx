import Icon from '@/components/Common/Icon'
import { IAbilityType } from '../../../interfaces/HomepageInterfaces'
import RedirectType from './RedirectType'


const OneAbility = ({ icon, what, info, type }: IAbilityType) => {
   return (
      <article className="ability">

         <Icon cname='icon' icon={icon!} />
         <p className='what'>{what}</p>
         <p className='info'>{info}</p>

         <RedirectType type={type} />

      </article>
   )
}


export default OneAbility