import Icon from '@/components/Common/Icon'
import toggleTable from '@/utils/asideTableToggler'
import { MdKeyboardArrowRight } from 'react-icons/md'


const ExpandArrow = () => {
   return (
      <Icon 
         clickfn={(e) => toggleTable(e.currentTarget as HTMLElement)} 
         cname='expand-arrow' 
         icon={<MdKeyboardArrowRight />} 
      />
   )
}


export default ExpandArrow