import React from 'react'
import { FilterSelect } from '../../interfaces/ProjectPageInterfaces'
import FilterSelectContainer from './FilterSelectContainer'
import filterFn from '@/utils/filterFn'


const FilterType = ({ initialTxt, options, dd, state, allDds }: FilterSelect) => {
   const changeFilter = (e: React.MouseEvent, str: string): void => {
      const t:   HTMLElement      = e.currentTarget as HTMLElement,
            inp: HTMLInputElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLInputElement


      inp.value = str
      inp.setAttribute('data-select', str)

      dd.switchActive()
      dd.shrinkMenu(.3)

      state(curr => {
         curr.projects = filterFn(curr)

         return {...curr}
      })
   }


   return (
      <div className="filter-wrap">

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