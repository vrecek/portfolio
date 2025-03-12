import { FilterState } from "@/interfaces/ProjectPageInterfaces"
import { IoSearchOutline } from "react-icons/io5";
import Icon from "../Common/Icon";


const Searchbar = ({update_fn}: FilterState) => {
    return (
        <div className="searchbar">

            <Icon icon={<IoSearchOutline />} />
            
            <input 
                className="filter-projects-searchbar"
                onChange={update_fn} 
                type="text" 
                spellCheck='false' 
            />            

        </div>
    )
}


export default Searchbar