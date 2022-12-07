import React from 'react'
import { InfoType } from '../../interfaces/OneProjectPageInterfaces'
import TextInformations from './TextInformations'

const ProjectInfo = ({ cname, header, text, icon }: InfoType) => {
   const convertToImage = (): void => {

   }


   return (
      <section className={ cname }>

         <TextInformations text={text} header={header} />

         <span className='icon'>{ icon }</span>

      </section>
   )
}

export default ProjectInfo