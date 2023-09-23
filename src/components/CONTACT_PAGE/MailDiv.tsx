import { HiOutlineClipboardCopy } from 'react-icons/hi'
import MAIL_ADDRESS from '../../data/MAIL_ADDRESS'

const MailDiv = () => {
   const copyClipboard = () => window.navigator.clipboard.writeText(MAIL_ADDRESS)

   return (
      <div>
         <span onClick={ copyClipboard } className="icon">
            <HiOutlineClipboardCopy />
         </span>
         
         <h5>My mail:</h5>
         <h4>{ MAIL_ADDRESS }</h4>

      </div>
   )
}

export default MailDiv