import React from 'react'

const TextArea = () => {
   const textareaFocus = (e: React.FocusEvent): void => {
      const label: HTMLElement = (e.target as HTMLInputElement).parentElement!.children[0] as HTMLElement

      label.style.top = '0'
      label.style.left = '0'
      label.style.transform = 'translateY(-105%)'
   }

   const textareaBlur = (e: React.FocusEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      const label: HTMLElement = t.parentElement!.children[0] as HTMLElement

      if(!t.value.length) {
         label.style.top = '.5em'
         label.style.left = '.5em'
         label.style.transform = 'translateY(0)'
      }
   }

   return (
      <div className="textarea">
         
         <label className='input-label'>Your message</label>

         <textarea onBlur={ textareaBlur } onFocus={ textareaFocus } spellCheck='false'>
         </textarea>

      </div>
   )
}

export default TextArea