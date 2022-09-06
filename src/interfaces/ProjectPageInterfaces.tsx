import DropDown from "../functions/DropdownClass";
import ProjectType from "./ProjectInterface";

export interface FilterSelect extends FilterState {
   initialTxt: string,
   options: string[],
   dd: DropDown
}

export interface FilterCurrent {
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