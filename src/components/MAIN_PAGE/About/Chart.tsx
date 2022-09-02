import React, { CSSProperties } from 'react'
import { ChartType } from '../../../interfaces/HomepageInterfaces'

const Chart = ({ num, moveXPerc }: ChartType) => {
   const years: number[] = [2019, 2020, 2021, 2022, 2023]

   const styles: CSSProperties = moveXPerc ? { width: `${ moveXPerc }%` } : {}

   return (
      <div className="chart">

         {
            years.map(x => {
               const isSame: boolean = num === x
               
               let percentClass: string = ''
               if(isSame && moveXPerc) percentClass = 'percent'

               return (
                  <span
                  key={ x }
                  data-text={ x.toString() } 
                  className={`year ${ isSame ? 'current' : '' } ${ percentClass }`}
                  >
                     <span style={ styles } className="inner">
                     </span>
                  </span>
               )
            })
         }

      </div>
   )
}

export default Chart