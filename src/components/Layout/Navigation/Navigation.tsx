import React from 'react'
import '../../../css/Navigation.css'
import { Ref } from '../../../interfaces/CommonInterfaces'
import List from './List'
import Title from './Title'

const Navigation = () => {
   const navRef: Ref = React.useRef<HTMLDivElement>(null)
   
   React.useEffect(() => {
      const curr: HTMLElement = navRef.current!
      const list: HTMLElement = curr.children[1] as HTMLElement
      const logo: HTMLElement = curr.children[0] as HTMLElement

      let visible: boolean = false

      window.addEventListener('scroll', () => {
         if(window.scrollY > 400 && !visible) {
            visible = true

            curr.style.position = 'fixed'
            list.style.background = '#303030'
            logo.style.background = '#181818'
         }

         else if(window.scrollY <= 400 && visible) {
            visible = false

            curr.style.position = 'absolute'
            list.style.background = 'none'
            logo.style.background = 'none'
         }
      })
   }, [])

   return (
      <nav ref={ navRef } className="layout-navigation">

         <Title />

         <List />

      </nav>
   )
}

export default Navigation