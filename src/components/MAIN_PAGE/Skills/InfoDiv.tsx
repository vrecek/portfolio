import { SkillDivType } from '../../../interfaces/HomepageInterfaces'


const InfoDiv = ({ what, info }: SkillDivType) => {
   return (
      <div className="info">
         <p>
            <span>{ what }</span>
            { info }
         </p>
      </div>
   )
}


export default InfoDiv