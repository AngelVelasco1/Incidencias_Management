import { createContext } from "react";

const IncidencesContext = createContext();

export const IncidencesProvider = ({ children }) => {
    return <IncidencesContext.Provider>
        {children}
    </IncidencesContext.Provider>
}