import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error()
    return context;
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { errors, setErrors } = useState([]);


    useEffect(() => {
        function validateAuth() {
            const cookies = Cookies.get();
            if (cookies) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false)
            };
        }
        validateAuth()
    }, []);

    const logOut = () => {
        const Navigate = useNavigate();
        Cookies.remove()
        setIsAuthenticated(false)
        Navigate("/")
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, errors, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;