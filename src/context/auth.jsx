import { useContext, createContext, useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth =() => {
    const context = useContext(AuthContext);
    return context;
} 
