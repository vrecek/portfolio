import Socials from '../Contact/Socials/Socials'
import Author from './Author'
import Timeline from './Timeline'


const ArticleText = () => {
   return (
      <article className="text">
                  
         <Author />
         <Timeline />
         <Socials />

      </article>
   )
}


export default ArticleText