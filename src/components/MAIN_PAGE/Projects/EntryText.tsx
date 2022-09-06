import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { PROJECTS_LEN } from '../../../data/ALL_PROJECTS'
import Button from '../../Common/Button'
import HeaderInfo from '../../Common/HeaderInfo'

const EntryText = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <div className="text-wrap">

         <HeaderInfo icon={ <AiOutlineFundProjectionScreen /> } cname='entry-info'>
            My projects ({ PROJECTS_LEN })
         </HeaderInfo>

         <Button text='View all' action={ () => n('/projects') } />

      </div>
   )
}

export default EntryText