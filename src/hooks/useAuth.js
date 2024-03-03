/* This will be a context for the user info that are needed to be stored (we are creating and using the context in this file only)*/
import { createContext, useContext } from "react";

export const UserContext = createContext(null)

const  useAuth = () => {
    return useContext(UserContext)
}

export default  useAuth;