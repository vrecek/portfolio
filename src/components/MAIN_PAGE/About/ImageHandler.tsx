import React from 'react'
import { ViewportHandlerType } from '@/interfaces/CommonInterfaces'
import img1 from '@/images/about1.webp'
import FigureImage from '@/components/Common/FigureImage'


const ImageHandler = ({ inViewport, forwardedRef }: ViewportHandlerType) => {
   React.useEffect(() => {
      if (inViewport)
      {
         ((forwardedRef.current)
                       .children[0] as HTMLElement)
                       .style.transform = 'scale(1)'
      }
   }, [inViewport])


   return (
      <FigureImage reference={forwardedRef} source={img1} altTxt='img' />
   )
}


export default ImageHandler