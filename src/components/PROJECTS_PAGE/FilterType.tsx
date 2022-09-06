import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectType from '../../interfaces/ProjectInterface'
import { FilterSelect, ILocation } from '../../interfaces/ProjectPageInterfaces'
import CurrentFilter from './CurrentFilter'

const FilterType = ({ initialTxt, options, dd, state }: FilterSelect) => {
   const filterLoc: ILocation = useLocation().state as ILocation

   const changeFilter = (e: React.MouseEvent, str: string): void => {
      const t: HTMLElement = e.target as HTMLElement

      const inp: HTMLInputElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLInputElement
      const elems: HTMLInputElement[] = Array.from(
         (t.parentElement!.parentElement!.parentElement! as HTMLFormElement) // Form
         .elements as HTMLCollectionOf<HTMLInputElement>
      )

      inp.value = str
      inp.setAttribute('data-select', str)

      const [stack, type, lang, date] = elems.map(x => x.getAttribute('data-select')!)

      dd.switchActive()
      dd.shrinkMenu(.3)

      state((curr: any) => {
         let copy: ProjectType[] = [...curr.original]

         if(type !== 'Default') copy = copy.filter(x => x.type === type)
         if(stack !== 'Default') copy = copy.filter(x => x.stack === stack)
         if(date !== 'Default') {
            copy = copy.sort((a, b) => date === 'Oldest' ? a.date - b.date : b.date - a.date)
         }
         if(lang !== 'Default') copy = copy.filter(x => x.language.includes(lang))

         curr.projects = copy

         return {...curr}
      })
   }

   return (
      <div className="select">

         <CurrentFilter dd={ dd } text={ initialTxt } />

         <ul>
            {
               options.map((x, i) => (
                  <li onClick={ (e) => changeFilter(e, x) } key={ i }>
                     { x }
                  </li>
               ))
            }
         </ul>

      </div>
   )
}

export default FilterType