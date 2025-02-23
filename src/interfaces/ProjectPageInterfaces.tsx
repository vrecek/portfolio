import DropDown from "@/utils/DropdownClass";
import ProjectType from "./ProjectInterface";


type FilterDropdowns = {
   dd: DropDown
   allDds: DropDown[]
}

export interface FilterSelect extends FilterState, FilterDropdowns {
   initialTxt: string
   options: string[]
}

export type FilterDropdownContainer = Omit<FilterSelect, 'state'> & {
   changeFilter: (e: React.MouseEvent, str: string) => void
}

export interface FilterCurrent extends FilterDropdowns {
   dd: DropDown,
   text: string
}

export interface ProjectState {
   original: ProjectType[],
   projects: ProjectType[]
}

export interface FilterState {
   state: React.Dispatch<React.SetStateAction<ProjectState>>
}

export type ILocation = string | null