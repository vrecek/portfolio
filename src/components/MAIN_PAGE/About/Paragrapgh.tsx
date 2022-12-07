import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Paragrapgh = () => {
   return (
      <section className="paragraph">

         <p>
            The key of persistence opens all doors closed by resistance
            <span>John Di Lemme</span>
         </p>

         <span className="quote"><FaQuoteLeft /></span>
         <span className="quote"><FaQuoteRight /></span>

      </section>
   )
}

export default Paragrapgh