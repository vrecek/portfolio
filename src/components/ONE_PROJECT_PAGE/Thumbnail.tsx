import { ThumbnailType } from '@/interfaces/OneProjectPageInterfaces'
import FigureImage from '../Common/FigureImage'


const Thumbnail = ({ src }: ThumbnailType) => {
   return (
      <section className="thumbnail">

         <FigureImage source={src} altTxt='thumbnail' />

      </section>
   )
}


export default Thumbnail