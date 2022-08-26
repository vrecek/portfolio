import React from 'react'
import '../../../css/Navigation.css'
import List from './List'
import Title from './Title'

const Navigation = () => {
   return (
      <nav className="layout-navigation">

         <Title />

         <List />

      </nav>
   )
}

export default Navigation