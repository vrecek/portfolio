import { FilterDropdownContainer } from '../../interfaces/ProjectPageInterfaces'
import CurrentFilter from './CurrentFilter'


const FilterSelectContainer = ({dd, allDds, initialTxt, options, changeFilter}: FilterDropdownContainer) => {
    return (
        <div className="select">

            <CurrentFilter 
                dd={dd} 
                allDds={allDds}
                text={initialTxt} 
            />

            <ul>
                {
                    options.map((x, i) => (
                        <li onClick={(e) => changeFilter(e, x)} key={i}>
                            {x}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}


export default FilterSelectContainer