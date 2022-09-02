import React from 'react'
import AboutIcons from './AboutIcons'
import Author from './Author'
import Paragrapgh from './Paragrapgh'
import Timeline from './Timeline'

const ArticleText = () => {
   return (
      <article className="text">
                  
         <Author />

         <Timeline />

         <AboutIcons />

      </article>
   )
}

export default ArticleText