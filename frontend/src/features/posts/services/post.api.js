import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    withCredentials: true

})
export const getfeed = async () => {
    try {
        const res = await api.get("posts/getfeed")
        return res.data
    } catch (error) {
        console.error("something went wrong while fetching the feed form the data  ", error.message)

    }
}

export const create_post = async (caption, file) => {
    try {
        const formData = new FormData()
        formData.append("caption", caption)
        formData.append("image", file)
        const res = await api.post("posts/create", formData)
        return res.data.post
    } catch (error) {
        console.error("something went wrong while creating an post ", error.message)

    }

}

export const like_post = async (post_id) => {
    try {
        const res = await api.post(`posts/like/${post_id}`)
        return res.data

    } catch (e) {
        console.error("something went wrong while like the post " + e.message)

    }

}
export const unlike_post = async (post_id) => {
    try {
        const res = await api.post(`posts/unlike/${post_id}`)
        return res.data

    } catch (e) {
        console.error("something went wrong while unlike the post ", e.message)

    }

}