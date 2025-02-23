import { AboutElement } from '../../../interfaces/HomepageInterfaces'
import Chart from './Chart'


const InfoElement = ({ date, text, chartNum, moveXPerc }: AboutElement) => {
   return (
      <article className="element">

         <p className='date'>{date}</p>
         <p className='text'>{text}</p>
         <Chart moveXPerc={moveXPerc} num={chartNum} />

      </article>
   )
}


export default InfoElement