import React from 'react'
import FigureImage from '../../Common/FigureImage'
import header from '../../../images/hdr.jpg'
import '../../../css/Header.css'
import LeftInformations from './LeftInformations'

const Header = () => {
   return (
      <header className='home-header'>

         <LeftInformations />
         <FigureImage source={ header } altTxt='background' />

      </header>
   )
}

export default Header