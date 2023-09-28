import axios from "axios";

export const addIncidenceRequest = async (incidence) => {
    await axios.post(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences`, incidence)
}

const  updateIncidenceRequest = () =>{

}

const deleteIncidenceRequest = () => {

}