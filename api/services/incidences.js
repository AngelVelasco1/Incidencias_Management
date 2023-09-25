import { Incidences } from "../models/incidences.js"

const incidences = new Incidences();

export const getService = async () => {
    return await incidences.getIncidences();
}


export const postService = async (data) => {
    return await incidences.addIncidence(data);
}


export const putService = async (id, data) => {
    return await incidences.updateIncidence(id, data);
}


export const deleteService = async (id) => {
    return await incidences.deleteIncidence(id);
}