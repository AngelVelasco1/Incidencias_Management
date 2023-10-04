import { useContext, createContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthContext")
    return context;
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function validateAuth() {
            const cookie = decodeURIComponent(document.cookie);
            const session = cookie.split("=")[0];  

            if (!session) {
                setIsAuthenticated(false);
                setLoading(false);
            } else {
                setIsAuthenticated(true);
                setLoading(false);
            }

        }

        validateAuth();
    }, []);

    const logOut = () => {
        document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        window.location.href = "http://192.168.129.72:5084/";
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;