import { PSmallText } from '@/interfaces/ProjectInterface'


const ProjectText = ({ title, para }: PSmallText) => {
   return (
      <section className="text">

         <p className='header'>{title}</p>
         <p className='para'>{para}</p>

      </section>
   )
}


export default ProjectText