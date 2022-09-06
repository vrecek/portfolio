import React from 'react'
import DropDown from '../../functions/DropdownClass'
import { FilterState } from '../../interfaces/ProjectPageInterfaces'
import FiltersDropdown from './FiltersDropdown'
import FilterType from './FilterType'

const Filters = ({ state }: FilterState) => {
   const [dropdowns] = React.useState<DropDown[]>([...Array(4)].map(x => new DropDown()))
   const options: string[][] = [
      ['Default', 'Fullstack', 'Frontend', 'Backend', 'Other'],
      ['Default', 'Website', 'Game', 'App'],
      ['Default', 'Javascript', 'Typescript', 'CSS', 'SCSS', 'Python'],
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

         <form className="container">

            {
               dropdowns.map((x, i) => (
                  <FilterType 
                     key={ i }
                     state={ state } 
                     dd={ x } 
                     options={ options[i] } 
                     initialTxt={ initialTxts[i] }
                  />
               ))
            }

         </form>

      </section>
   )
}

export default Filters