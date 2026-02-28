import { useContext } from "react"
import { getfeed } from "../services/post.api"
import { PostContext } from '../post.context.jsx'


export const usePost = () => {


    const context = useContext(PostContext)

    const { feed, setFeed, loading, setLoading, post, setPost } = context


    const handleGetFeed = async () => {
        setLoading(true)
        try {
            const res = await getfeed()
            setFeed(res.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error("something went wrong while fetching the feed " + error.message)

        }
        finally {
            setLoading(false)
        }
    }


    return {
        loading, feed, post, handleGetFeed
    }
}