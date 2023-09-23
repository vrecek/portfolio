import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'
import { TitleAndLinks } from '../../interfaces/OneProjectPageInterfaces'

const NameAndLinks = ({ name, liveUrl, repo }: TitleAndLinks) => {
   const livePreview = (): JSX.Element => {
      return liveUrl 
      ?
         <span onClick={ () => window.open(liveUrl, '_blank') } data-text='Live preview' className='icon'>
            <AiFillEye />
         </span>
      
      :
         <span data-text='Preview not available' className='icon red'>
            <AiFillEyeInvisible />
         </span>
   }

   return (
      <section className="title-links">

         <h1>{ name }</h1>

         <div className="links">

            { livePreview() }

            <span onClick={ () => window.open(repo, '_blank') } data-text='Repository' className='icon'>
               <GoRepo />
            </span>

         </div>

      </section>
   )
}

export default NameAndLinks