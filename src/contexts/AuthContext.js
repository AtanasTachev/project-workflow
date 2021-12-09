import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
}