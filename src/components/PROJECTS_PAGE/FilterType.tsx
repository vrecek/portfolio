import React from 'react'
import ProjectType from '../../interfaces/ProjectInterface'
import { FilterSelect } from '../../interfaces/ProjectPageInterfaces'
import FilterSelectContainer from './FilterSelectContainer'


const FilterType = ({ initialTxt, options, dd, state, allDds }: FilterSelect) => {
   const changeFilter = (e: React.MouseEvent, str: string): void => {
      const t: HTMLElement = e.currentTarget as HTMLElement

      // Get all filter's input fields (including current one)
      const inp: HTMLInputElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLInputElement
      const elems: HTMLInputElement[] = Array.from(
         (t.parentElement!.parentElement!.parentElement!.parentElement! as HTMLFormElement)
         .elements as HTMLCollectionOf<HTMLInputElement>
      )

      // Set clicked input's filter text and set it to an attribute 
      inp.value = str
      inp.setAttribute('data-select', str)

      // Get all 4 filters
      const [stack, type, lang, date] = elems.map(x => x.getAttribute('data-select')!)

      // Shrink menu if clicked
      dd.switchActive()
      dd.shrinkMenu(.3)

      state((curr: any) => {
         let copy: ProjectType[] = [...curr.original]

         // Apply filter if value is different than 'Default'
         if (type !== 'Default') copy = copy.filter(x => x.type === type)
         if (stack !== 'Default') copy = copy.filter(x => x.stack === stack)
         if (date !== 'Default') 
            copy = copy.sort((a, b) => date === 'Oldest' ? a.date - b.date : b.date - a.date)
         
         if (lang !== 'Default') copy = copy.filter(x => x.language.includes(lang))

         curr.projects = copy

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