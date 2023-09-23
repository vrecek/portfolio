import React from 'react'

const SliderButtons = ({ radioNum }: { radioNum: number }) => {
   const changeSlide = (e: React.MouseEvent, num: number): void => {
      const t: HTMLElement = e.target as HTMLElement
      const slider: HTMLElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLElement
      const btns: Element[] = Array.from(t.parentElement!.children)

      for(let x of btns) x.classList.remove('active')
      slider.style.transform = `translateX(-${ num * 100 }%)`
      t.classList.add('active')
   }

   return (
      <div className="buttons">

         {
            [...Array(radioNum)].map((_, i) => (
               <span key={ i } onClick={ (e) => changeSlide(e, i) } className={`radio ${ i === 0 ? 'active' : '' }`}>
               </span>
            ))
         }

      </div>
   )
}

export default SliderButtons