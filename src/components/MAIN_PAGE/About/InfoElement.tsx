import React from 'react'
import { AboutElement } from '../../../interfaces/HomepageInterfaces'
import Chart from './Chart'

const InfoElement = ({ date, text, chartNum, moveXPerc }: AboutElement) => {
   return (
      <article className="element">

         <h2>{ date }</h2>
         <p>{ text }</p>
         <Chart moveXPerc={ moveXPerc } num={ chartNum } />

      </article>
   )
}

export default InfoElement