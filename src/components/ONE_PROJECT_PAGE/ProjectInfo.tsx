import React from 'react'
import { InfoType } from '../../interfaces/OneProjectPageInterfaces'

const ProjectInfo = ({ cname, header, text, icon }: InfoType) => {
   return (
      <section className={ cname }>

         <div className="wrap">

            <h2>{ header }</h2>
            {
               typeof text === 'string'
               ?
                  <p>{ text }</p>
               :
                  text
            }

         </div>

         <span className='icon'>{ icon }</span>

      </section>
   )
}

export default ProjectInfo