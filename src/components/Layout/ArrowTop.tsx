import React from 'react'
import { TbArrowForwardUp } from 'react-icons/tb'
import { Ref } from '../../interfaces/CommonInterfaces'

const ArrowTop = () => {
   const arrowRef: Ref = React.useRef<HTMLDivElement>(null)
   
   React.useEffect(() => {
      const curr: HTMLElement = arrowRef.current!
      let visible: boolean = false

      window.addEventListener('scroll', () => {
         if(window.scrollY > 300 && !visible) {
            visible = true

            curr.style.opacity = '1'
            curr.style.pointerEvents = 'all'
         }

         else if(window.scrollY <= 300 && visible) {
            visible = false
            
            curr.style.opacity = '0'
            curr.style.pointerEvents = 'none'
         }
      })
   }, [])

   return (
      <div onClick={ () => window.scrollTo(0, 0) } ref={ arrowRef } className="layout-arrow-top">

         <span>

            <TbArrowForwardUp />

         </span>

      </div>
   )
}

export default ArrowTop