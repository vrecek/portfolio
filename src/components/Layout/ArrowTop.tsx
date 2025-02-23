import React from 'react'
import { Ref } from '../../interfaces/CommonInterfaces'
import Icon from '../Common/Icon'
import { FaArrowUp } from 'react-icons/fa'


const ArrowTop = () => {
   const arrowRef: Ref = React.useRef<HTMLDivElement>(null)

   
   React.useEffect(() => {
      const curr:    HTMLElement = arrowRef.current!
      let   visible: boolean     = false


      window.addEventListener('scroll', () => {
         if (window.scrollY > 300 && !visible)
         {
            visible = true

            curr.style.opacity = '1'
            curr.style.pointerEvents = 'all'
         }

         else if (window.scrollY <= 300 && visible)
         {
            visible = false
            
            curr.style.opacity = '0'
            curr.style.pointerEvents = 'none'
         }
      })
   }, [])


   return (
      <Icon
         icon={<FaArrowUp />}
         cname='layout-arrow-top'
         clickfn={() => window.scrollTo(0, 0)}
         reference={arrowRef}
      />
   )
}


export default ArrowTop