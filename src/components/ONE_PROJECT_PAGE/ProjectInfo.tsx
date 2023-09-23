import { InfoType } from '../../interfaces/OneProjectPageInterfaces'
import TextInformations from './TextInformations'

const ProjectInfo = ({ cname, header, text, icon }: InfoType) => {
   return (
      <section className={ cname }>

         <TextInformations text={text} header={header} />

         <span className='icon'>{ icon }</span>

      </section>
   )
}

export default ProjectInfo