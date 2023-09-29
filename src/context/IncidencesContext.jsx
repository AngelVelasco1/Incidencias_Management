import { createContext, useContext, useState } from "react";
import { addIncidenceRequest, getIncidencesRequest, deleteIncidenceRequest } from '../services/incidences.api';

export const IncidencesContext = createContext();
export const useIncidences = () => {
    const context = useContext(IncidencesContext);
    if (!context) throw new Error("useIncidences must be used within IncidencesContext")
    return context;
}

export const IncidencesProvider = ({ children }) => {
    const [incidences, setIncidences] = useState([]);

    const loadIncidences = async () => {
        const response = await getIncidencesRequest();
        setIncidences(response.data);
    }

    const addIncidence = async (incidence) => {
        const response = await addIncidenceRequest(incidence);
        setIncidences([...incidences, response.data]);
    }

    const deleteIncidence = async (id) => {
        try {
            const response = await deleteIncidenceRequest(id);
            setIncidences(incidences.filter(incidence => incidence.id !== id))
            
        } catch (err) {
            console.log({ err: err.message });
        }
    }

    return <IncidencesContext.Provider value={{ incidences, loadIncidences, addIncidence, deleteIncidence }}>
        {children}
    </IncidencesContext.Provider>
}