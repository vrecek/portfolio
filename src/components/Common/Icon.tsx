import { IconType } from "@/interfaces/CommonInterfaces"


const Icon = ({ icon, cname, clickfn, reference }: IconType) => {
   return (
      <span ref={reference} onClick={clickfn} className={cname}>
         {icon}
      </span>
   )
}
 

export default Icon