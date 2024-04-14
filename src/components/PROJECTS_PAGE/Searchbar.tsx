import filterFn from "../../functions/filterFn";
import { FilterState } from "../../interfaces/ProjectPageInterfaces"
import { IoSearchOutline } from "react-icons/io5";


const Searchbar = ({state}: FilterState) => {
    const filterSearch = (): void => {
        state(curr => {
            curr.projects = filterFn(curr)

            return {...curr}
        })
    }


    return (
        <div className="searchbar">

            <span><IoSearchOutline /></span>
            <input 
                className="filter-projects-searchbar"
                onChange={filterSearch} 
                type="text" 
                spellCheck='false' 
            />            

        </div>
    )
}


export default Searchbar