/** this will communicate with backend */
import axios from "axios"
const api = axios.create({
    baseURL: "http://localhost:8000/api/auth",
    withCredentials: true
})

export const Login = async (username, password) => {
    try {

        const response = await api.post('/login', { username, password })
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }


}
export const Register = async (username, email, bio, password) => {
    try {
        const response = await api.post('/register', { username, email, bio, password })
        return response.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}
export const Profile = async () => {
    try {

        const response = await api.get('/profile')
        return response.data
    } catch (error) {
        console.log(error.message)
    }


}
