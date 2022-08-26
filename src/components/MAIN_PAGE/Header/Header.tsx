import React from 'react'
import FigureImage from '../../Common/FigureImage'
import header from '../../../images/header.jpg'
import '../../../css/Header.css'
import LeftInformations from './LeftInformations'

const Header = () => {
   return (
      <header className='home-header'>

         <div className="wrap">

            <LeftInformations />
            <FigureImage source={ header } altTxt='background' />

         </div>

      </header>
   )
}

export default Header