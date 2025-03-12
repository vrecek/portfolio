import React from 'react'
import { FilterSelect } from '../../interfaces/ProjectPageInterfaces'
import FilterSelectContainer from './FilterSelectContainer'
import filterInputOnChange from '@/utils/filterInputOnChange'


const FilterType = ({ initialTxt, options, dd, update_fn, allDds, cname }: FilterSelect) => {
   const changeFilter = async (e: React.MouseEvent, str: string): Promise<void> => {
      const t:   HTMLElement      = e.currentTarget as HTMLElement,
            inp: HTMLInputElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLInputElement

            
      filterInputOnChange(inp, str)

      dd.switchActive()
      dd.shrinkMenu(.3)
      
      await update_fn()
   }


   return (
      <div className={`filter-wrap ${cname}`}>

         <p className='by-info'>By {initialTxt.toLowerCase()}</p>

         <FilterSelectContainer 
            allDds={allDds}
            changeFilter={changeFilter}
            dd={dd}
            initialTxt={initialTxt}
            options={options}
         />

      </div>
   )
}

export default FilterType