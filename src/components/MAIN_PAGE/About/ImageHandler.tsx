import React from 'react'
import { ViewportHandlerType } from '../../../interfaces/CommonInterfaces'
import img1 from '../../../images/about1.jpg'

const ImageHandler = ({ inViewport, forwardedRef }: ViewportHandlerType) => {
   React.useEffect(() => {
      if(inViewport) {
         ((
         forwardedRef.current as HTMLElement)
         .children[0] as HTMLElement)
         .style.transform = 'scale(1)'
      }
   }, [inViewport])

   return (
      <figure ref={ forwardedRef }>

         <img src={ img1 } alt='img' />

      </figure>
   )
}

export default ImageHandler