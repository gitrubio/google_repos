import { useEffect, useState } from "react"
import { getUser, getUserRepos } from "../api/services"
import { ProfileGithub, Repository } from "../types/app.type"


const useGithub = () => {
    const [user, setUser] = useState<ProfileGithub| null>(null)
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        const { data: user } = await getUser('google')
        const { data: repos } = await getUserRepos('google')
        setUser(user)
        setRepositories(repos)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        user,
        repositories,
        loading
    }
}

export default useGithub;