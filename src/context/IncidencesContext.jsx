import { createContext, useContext, useState } from "react";
import { getIncidencesRequest, getIncidenceRequest, addIncidenceRequest, updateIncidenceRequest, deleteIncidenceRequest } from '../services/incidences.api';

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

    const getIncidence = async(id) => {
        const response = await getIncidenceRequest(id);
        return response.data
    }

    const addIncidence = async (incidence) => {
        const response = await addIncidenceRequest(incidence);
        setIncidences([...incidences, response.data]);
    }

    const updateIncidence = async (id, incidence) => {
        const response = await updateIncidenceRequest(id, incidence);
        console.log(response);
    }

    const deleteIncidence = async (id) => {
        try {
             await deleteIncidenceRequest(id);
            setIncidences(incidences.filter(incidence => incidence.id !== id))
            
        } catch (err) {
            console.log({ err: err.message });
        }
    }

    return <IncidencesContext.Provider value={{ incidences, loadIncidences, getIncidence, addIncidence, updateIncidence, deleteIncidence }}>
        {children}
    </IncidencesContext.Provider>
}