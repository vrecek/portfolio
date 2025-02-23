import React from 'react'
import { PercentBarType } from '@/interfaces/HomepageInterfaces'
import { PercentContext } from './OneSkill'


const PercentBar = ({ inViewport, forwardedRef }: PercentBarType) => {
   const percent: number = React.useContext(PercentContext)


   React.useEffect(() => {
      const bar: HTMLElement = forwardedRef.current! as HTMLElement

      if (inViewport) 
         bar.style.width = `${percent}%`

   }, [inViewport])


   return (
      <section className="percent-bar">

         <p>Level of confidence</p>

         <div className="bar">
            <div 
               ref={forwardedRef}
               data-fill={`${percent}%`} 
               className='fill'>
            </div>
         </div>

      </section>
   )
}


export default PercentBar