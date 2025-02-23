import { FilterState } from "@/interfaces/ProjectPageInterfaces"
import { IoSearchOutline } from "react-icons/io5";
import Icon from "../Common/Icon";
import filterFn from "@/utils/filterFn";


const Searchbar = ({state}: FilterState) => {
    const filterSearch = (): void => {
        state(curr => {
            curr.projects = filterFn(curr)

            return {...curr}
        })
    }


    return (
        <div className="searchbar">

            <Icon icon={<IoSearchOutline />} />
            
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