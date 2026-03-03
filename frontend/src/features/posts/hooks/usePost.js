import { useContext, useEffect } from "react"
import { getfeed, create_post, like_post, unlike_post } from "../services/post.api"
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


    const handleCreatePost = async (caption, file) => {
        setLoading(true)
        try {
            const res = await create_post(caption, file)
            setPost(res)
            setFeed([res, ...feed])

            setLoading(false)

        } catch (error) {
            setLoading(false)
        }

    }

    const handleLike = async (post_id) => {
        try {
            // Optimistically update UI first
            setFeed(feed.map(post =>
                post._id === post_id
                    ? { ...post, isLiked: !post.isLiked }
                    : post
            ))
            // Then call API
            await like_post(post_id)
        } catch (error) {
            // If API fails, revert the change
            setFeed(feed.map(post =>
                post._id === post_id
                    ? { ...post, isLiked: !post.isLiked }
                    : post
            ))
            console.error("Error toggling like: " + error.message)
        }
    }
    // useEffect(() => {
    //     handleGetFeed()
    // }, [])


    return {
        loading, feed, post, handleGetFeed, handleCreatePost, handleLike
    }
}