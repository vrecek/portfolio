import DropDown from "@/utils/DropdownClass";
import ProjectType from "./ProjectInterface";


type FilterDropdowns = {
   dd: DropDown
   allDds: DropDown[]
}

export interface FilterSelect extends FilterState, FilterDropdowns {
   initialTxt: string
   options:    string[]
   cname?:     string
}

export type FilterDropdownContainer = Omit<FilterSelect, 'update_fn'> & {
   changeFilter: (e: React.MouseEvent, str: string) => void
}

export interface FilterCurrent extends FilterDropdowns {
   dd: DropDown,
   text: string
}

export interface ProjectState {
   original: ProjectType[]
   projects: ProjectType[]
   lastcomm: ProjectType[]
}

export interface FilterState {
   update_fn: () => Promise<void>
}

export type ILocation = string | null

export type RepoObject = {
   pushed_at: string
   html_url:  string
}

export type CommitsObject = {
   name: string
   commit: {
      committer: {
         date: string
      }
   }
}

export type ICommitContext = {
   fn:  React.Dispatch<React.SetStateAction<ProjectType[]>>
   arr: ProjectType[]
}