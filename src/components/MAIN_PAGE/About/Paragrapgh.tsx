import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Paragrapgh = () => {
   return (
      <section className="paragraph">

         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum veritatis blanditiis sint. Labore reprehenderit dicta tempore odit sapiente esse praesentium maiores ex, minus ut maxime nemo ratione blanditiis suscipit. 
         </p>

         <span className="quote"><FaQuoteLeft /></span>
         <span className="quote"><FaQuoteRight /></span>

      </section>
   )
}

export default Paragrapgh