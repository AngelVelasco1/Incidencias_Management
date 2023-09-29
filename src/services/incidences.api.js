import axios from "axios";

export const getIncidencesRequest = async () => {
    return await axios.get(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences`)
}

export const getIncidenceRequest = async (id) => {
    return await axios.get(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences?id=${id}`)
}

export const addIncidenceRequest = async (incidence) => {
    return await axios.post(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences`, incidence)
}

export const updateIncidenceRequest = async (id, incidence) => {
    return await axios.put(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences?id=${id}`, incidence)
}

export const deleteIncidenceRequest = async(id) => {
    return await axios.delete(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/app/incidences?id=${id}`)
}