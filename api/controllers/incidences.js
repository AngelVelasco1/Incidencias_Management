import { getService, postService, putService, deleteService } from "../services/incidences.js";

export const getIncidences = async(req, res) => {
    try {
        const incidences = await getService();
        res.status(200).json(incidences);
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const addIncidence = async(req, res) => {
    try {
        const data = req.body;
        const Incidence = await postService(data);
        res.status(200).json(Incidence);
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const updateIncidence = async(req, res) => {
    try {
        const id = req.query.id
        const data = req.body;
        const Incidence = await putService(id, data);
        res.status(200).json(Incidence);
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const deleteIncidence = async(req, res) => {
    try {   
        const id = req.query.id;
        const Incidence = await deleteService(id);
        res.status(200).json(Incidence);
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}