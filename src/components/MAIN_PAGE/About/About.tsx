import HeaderInfo from '../../Common/HeaderInfo'
import { FcAbout } from 'react-icons/fc'
import '@/css/About.css'
import ArticleText from './ArticleText'
import ImageHandler from './ImageHandler'
import handleViewport from 'react-in-viewport'


const About = ({ cname }: {cname?: string}) => {
   const AuthorImage = handleViewport(ImageHandler)

   
   return (
      <section className={`home-about ${cname}`}>

         <HeaderInfo icon={<FcAbout />}>
            About me
         </HeaderInfo>

         <section className="wrap">
            <AuthorImage />
            
            <ArticleText />
         </section>

      </section>
   )
}


export default About