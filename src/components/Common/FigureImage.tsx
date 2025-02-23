import { FigureType } from '../../interfaces/CommonInterfaces'


const FigureImage = ({ source, cname, altTxt, reference }: FigureType) => {
   return (
      <figure ref={reference} className={cname ?? ''}>

         <img src={source} alt={altTxt ?? 'image'} />

      </figure>
   )
}


export default FigureImage