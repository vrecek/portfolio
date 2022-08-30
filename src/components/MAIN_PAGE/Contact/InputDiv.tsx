import React from 'react'

const InputDiv = ({ text }: { text: string }) => {
   const inpFocus = (e: React.FocusEvent): void => {
      const label: HTMLElement = (e.target as HTMLInputElement).parentElement!.children[0] as HTMLElement

      label.style.top = '0'
      label.style.transform = 'translateY(-100%)'
   }

   const inpBlur = (e: React.FocusEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      const label: HTMLElement = t.parentElement!.children[0] as HTMLElement

      if(!t.value.length) {
         label.style.top = '50%'
         label.style.transform = 'translateY(-50%)'
      }
   }

   const inpChange = (e: React.ChangeEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      
      t.style.borderColor = t.value ? 'greenyellow' : 'royalblue'
   }

   return (
      <div className="input-div">

         <label className='input-label'>{ text }</label>
         <input
            onChange={ inpChange } 
            onFocus={ inpFocus }
            onBlur={ inpBlur }
            type="text" 
            spellCheck='false' 
         />

      </div>
   )
}

export default InputDiv