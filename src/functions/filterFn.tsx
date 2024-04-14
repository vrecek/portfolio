import ProjectType from "../interfaces/ProjectInterface"
import { ProjectState } from "../interfaces/ProjectPageInterfaces"


export default (curr: ProjectState): ProjectType[] => {
    const form:   HTMLFormElement = document.querySelector('form.filter-projects-form') as HTMLFormElement,
          elems:  HTMLInputElement[] = [...form.elements as HTMLCollectionOf<HTMLInputElement>],
          {value} = document.querySelector('input.filter-projects-searchbar') as HTMLInputElement

    const [stack, type, lang, date] = elems.map(x => x.getAttribute('data-select')!)
    let copy: ProjectType[] = [...curr.original]

    // Apply filters
    if (type !== 'Default') copy = copy.filter(x => x.type === type)
    if (stack !== 'Default') copy = copy.filter(x => x.stack === stack)
    if (date !== 'Default') 
        copy = copy.sort((a, b) => date === 'Oldest' ? a.date - b.date : b.date - a.date)
    if (lang !== 'Default') copy = copy.filter(x => x.language.includes(lang))
    if (value)
        copy = copy.filter(x => x.name.match(new RegExp(value, 'i')))


    return copy
}