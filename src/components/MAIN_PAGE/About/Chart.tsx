import React from 'react'
import { Ref } from '../../../interfaces/CommonInterfaces'
import { ChartType } from '../../../interfaces/HomepageInterfaces'


const Chart = ({ num, moveXPerc }: ChartType) => {
   const barRef: Ref      = React.useRef<HTMLDivElement>(null),
         years:  number[] = [2019, 2020, 2021, 2022, 2023]


   React.useEffect(() => {
      const curr: HTMLElement = barRef.current!

      if (!moveXPerc) return

      const attr: number             = parseInt(curr.getAttribute('data-num')!),
            next: HTMLElement | null = [...curr.parentElement!.parentElement!.children][attr + 1] as HTMLElement ?? null 

      if (!next) return

      const changeSize = (): void => {
         const [x, y] = [curr.getBoundingClientRect().x, next.getBoundingClientRect().x]

         curr.style.width = `${(y - x) / 100 * moveXPerc}px`
      }
      
      changeSize()

      window.addEventListener('resize', () => changeSize())
   }, [])

   
   return (
      <div className="chart">
         {
            years.map((x, i) => {
               const isSame:    boolean = num === x
               let   percCname: string  = ''

               if (isSame && moveXPerc) percCname = 'percent'

               return (
                  <span
                  key={x}
                  data-text={x.toString()} 
                  className={`year ${isSame ? 'current' : ''} ${percCname}`}
                  >
                     <span 
                     data-num={isSame ? i : null} 
                     ref={isSame ? barRef : null} 
                     className="inner"></span>
                  </span>
               )
            })
         }
      </div>
   )
}


export default Chart