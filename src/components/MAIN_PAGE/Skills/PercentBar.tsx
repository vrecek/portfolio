import React from 'react'
import { PercentBarType } from '../../../interfaces/HomepageInterfaces'
import { PercentContext } from './OneSkill'

const PercentBar = ({ inViewport, forwardedRef }: PercentBarType) => {
   const percent: number = React.useContext(PercentContext)

   React.useEffect(() => {
      const curr: HTMLElement = forwardedRef.current! as HTMLElement
      const bar: HTMLElement = curr.children[1].children[0] as HTMLElement

      if(inViewport) bar.style.width = `${ percent }%`

   }, [inViewport])

   return (
      <section ref={ forwardedRef } className="percent-bar">

         <h3>Level of confidence</h3>

         <div className="bar">
            <div 
               data-fill={`${ percent }%`} 
               className='fill'>
            </div>
         </div>

      </section>
   )
}

export default PercentBar