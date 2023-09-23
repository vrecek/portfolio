import HeaderInfo from '../../Common/HeaderInfo'
import { FcAbout } from 'react-icons/fc'
import '../../../css/About.css'
import ArticleText from './ArticleText'
import ImageHandler from './ImageHandler'
import handleViewport from 'react-in-viewport'

const About = () => {
   const AuthorImage = handleViewport(ImageHandler)

   return (
      <section className="home-about">

         <HeaderInfo icon={ <FcAbout /> } cname='entry-info'>
            About me
         </HeaderInfo>

         <div className="wrap first-info">

            <AuthorImage />
            
            <ArticleText />

         </div>

      </section>
   )
}

export default About