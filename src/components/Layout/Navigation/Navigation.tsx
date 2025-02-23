import React from 'react'
import '../../../css/Navigation.css'
import { Ref } from '../../../interfaces/CommonInterfaces'
import List from './List'
import Title from './Title'


const Navigation = () => {
   const navRef: Ref = React.useRef<HTMLDivElement>(null)
   
   React.useEffect(() => {
      const nav:  HTMLElement = navRef.current!,
            list: HTMLElement = nav.children[1] as HTMLElement,
            logo: HTMLElement = nav.children[0] as HTMLElement

      let visible: boolean = false


      window.addEventListener('scroll', () => {
         if (window.scrollY > 400 && !visible)
         {
            visible = true

            nav.style.position    = 'fixed'
            list.style.background = '#303030'
            logo.style.background = '#181818'
         }

         else if (window.scrollY <= 400 && visible)
         {
            visible = false

            nav.style.position    = 'absolute'
            list.style.background = 'none'
            logo.style.background = 'none'
         }
      })
   }, [])


   return (
      <nav ref={navRef} className="layout-navigation">

         <Title />

         <List />

      </nav>
   )
}


export default Navigation