const SliderButtons = ({ radioNum }: { radioNum: number }) => {
   const changeSlide = (e: React.MouseEvent, num: number): void => {
      const t:      HTMLElement = e.target as HTMLElement,
            slider: HTMLElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLElement,
            btns:   Element[]   = [...t.parentElement!.children]

      for (const x of btns) x.classList.remove('active')

      slider.style.transform = `translateX(-${num * 100}%)`
      t.classList.add('active')
   }

   return (
      <section className="buttons">
         {
            [...Array(radioNum)].map((_, i) => (
               <span 
               key={i} 
               onClick={(e) => changeSlide(e, i)} 
               className={`radio ${ i ? '' : 'active' }`}>
               </span>
            ))
         }
      </section>
   )
}


export default SliderButtons