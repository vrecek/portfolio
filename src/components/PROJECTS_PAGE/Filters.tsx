import React from 'react'
import { FilterState } from '@/interfaces/ProjectPageInterfaces'
import FiltersDropdown from './FiltersDropdown'
import FilterType from './FilterType'
import DropDown from '@/utils/DropdownClass'


const Filters = ({ update_fn }: FilterState) => {
   const [dropdowns] = React.useState<DropDown[]>([...Array(4)].map(() => new DropDown()))

   const initialTxts: string[]   = ['Stack', 'Type', 'Language', 'Date'],
         options:     string[][] = [
            ['Default', 'Fullstack', 'Frontend', 'Backend', 'Other'],
            ['Default', 'Website', 'Game', 'App'],
            ['Default', 'Javascript', 'Typescript', 'CSS', 'SCSS', 'Python', 'Bash', 'C'],
            ['Default', 'Oldest', 'Newest', 'Latest commit']
         ]


   return (
      <section className="filter">

         <FiltersDropdown />

         <p className="text">Filters</p>

         <form className="container filter-projects-form">
            {
               dropdowns.map((x, i) => (
                  <FilterType
                     cname={initialTxts[i]}
                     key={i}
                     allDds={dropdowns}
                     update_fn={update_fn} 
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