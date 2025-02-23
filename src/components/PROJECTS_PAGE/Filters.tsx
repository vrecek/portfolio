import React from 'react'
import { FilterState } from '@/interfaces/ProjectPageInterfaces'
import FiltersDropdown from './FiltersDropdown'
import FilterType from './FilterType'
import DropDown from '@/utils/DropdownClass'


const Filters = ({ state }: FilterState) => {
   const [dropdowns] = React.useState<DropDown[]>([...Array(4)].map(() => new DropDown()))
   const options: string[][] = [
      ['Default', 'Fullstack', 'Frontend', 'Backend', 'Other'],
      ['Default', 'Website', 'Game', 'App'],
      ['Default', 'Javascript', 'Typescript', 'CSS', 'SCSS', 'Python', 'Bash', 'C'],
      ['Default', 'Oldest', 'Newest']
   ]
   const initialTxts: string[] = [
      'Stack', 
      'Type', 
      'Language', 
      'Date'
   ]


   return (
      <section className="filter">

         <FiltersDropdown />

         <p className="text">Filters</p>

         <form className="container filter-projects-form">
            {
               dropdowns.map((x, i) => (
                  <FilterType 
                     key={i}
                     allDds={dropdowns}
                     state={state} 
                     dd={x} 
                     options={options[i]} 
                     initialTxt={initialTxts[i]}
                  />
               ))
            }
         </form>

      </section>
   )
}


export default Filters