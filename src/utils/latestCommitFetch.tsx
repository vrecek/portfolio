import ProjectType from "@/interfaces/ProjectInterface";
import Fetches from "./FetchClass";
import { RepoObject } from "@/interfaces/ProjectPageInterfaces";


const latestCommitFetch = async (projects: ProjectType[]): Promise<ProjectType[]> => {
    const [err, repos] = await Fetches.http<RepoObject[]>('https://api.github.com/users/vrecek/repos?per_page=100&sort=pushed', 'GET')

    if (err || !repos?.json)
        return []


    return repos.json.map(repo => {
        const i: number = projects.findIndex(x => x.repository === repo.html_url)

        return projects[i]

    }).filter(x => x)
}


export default latestCommitFetch