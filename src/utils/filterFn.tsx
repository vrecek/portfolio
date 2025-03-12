import ProjectType from "../interfaces/ProjectInterface"
import { ProjectState } from "../interfaces/ProjectPageInterfaces"
import latestCommitFetch from "./latestCommitFetch"


export default async (curr: ProjectState): Promise<ProjectType[]> => {
    const form:   HTMLFormElement    = document.querySelector('form.filter-projects-form') as HTMLFormElement,
          elems:  HTMLInputElement[] = [...form.elements as HTMLCollectionOf<HTMLInputElement>],
          {value} = document.querySelector('input.filter-projects-searchbar') as HTMLInputElement

    const [stack, type, lang, date] = elems.map(x => x.getAttribute('data-select')!)
    let   copy: ProjectType[]       = [...curr.original]


    if (date !== 'Default') 
    {
        if (date === 'Latest commit')
        {
            if (curr.lastcomm.length)
                copy = [...curr.lastcomm]
            else
                copy = await latestCommitFetch(copy)      
        }
        else 
            copy = copy.sort((a, b) => date === 'Oldest' ? a.date - b.date : b.date - a.date)
    }

    if (type !== 'Default')  copy = copy.filter(x => x.type === type)
    if (stack !== 'Default') copy = copy.filter(x => x.stack === stack)
    if (lang !== 'Default')  copy = copy.filter(x => x.language.includes(lang))

    if (value)
        copy = copy.filter(x => x.name.match(new RegExp(value, 'i')))

    return copy
}