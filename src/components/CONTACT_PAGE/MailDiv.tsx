import React from 'react'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

const MailDiv = () => {
   const copyClipboard = () => window.navigator.clipboard.writeText('oktawiusz2002@gmail.com')

   return (
      <div>
         <span onClick={ copyClipboard } className="icon">
            <HiOutlineClipboardCopy />
         </span>
         
         <h5>My mail:</h5>
         <h4>oktawiusz2002@gmail.com</h4>

      </div>
   )
}

export default MailDiv