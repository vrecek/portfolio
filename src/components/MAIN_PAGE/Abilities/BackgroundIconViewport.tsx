import React from 'react'
import { ViewportHandlerType } from '../../../interfaces/CommonInterfaces'
import { VscTypeHierarchy } from 'react-icons/vsc'

const BackgroundIconViewport = ({ inViewport, forwardedRef }: ViewportHandlerType) => {
   React.useEffect(() => {
      const c: HTMLElement = forwardedRef.current as HTMLElement
      const svg: HTMLElement = c.children[0] as HTMLElement

      if(inViewport) {
         c.style.height = '100%';
         svg.style.color = '#303030'

         return
      }

      c.style.height = '1%';
      svg.style.color = 'white'

   }, [inViewport])

   return (
      <span ref={ forwardedRef } className="background-icon">
         { <VscTypeHierarchy /> }
      </span>
   )
}

export default BackgroundIconViewport