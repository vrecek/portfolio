import { InfoType } from '../../interfaces/OneProjectPageInterfaces'
import Icon from '../Common/Icon'
import TextInformations from './TextInformations'


const ProjectInfo = ({ cname, header, text, icon }: InfoType) => {
   return (
      <section className={cname}>

         <TextInformations text={text} header={header} />

         <Icon cname='icon' icon={icon} />

      </section>
   )
}


export default ProjectInfo