import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { Login, Register, Profile } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handlelogin = async (username, password) => {
        setLoading(true)
        const res = await Login(username, password)
        setUser(res.data)
        setLoading(false)
    }
    const handleregister = async (username, email, bio, password) => {
        setLoading(true)
        const res = await Register(username, email, bio, password)
        setUser(res.data)
        setLoading(false)
    }


    const handlegetprofile = async () => {
        setLoading(true)
        const res = await Profile()
        setUser(res.data)
        setLoading(false)

    }
    return {
        user, loading, handlelogin, handleregister, handlegetprofile
    }
}