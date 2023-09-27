import { getService, postService, putService, deleteService } from "../services/incidences.js";

export const getIncidences = async(req, res, next) => {
    try {
        const incidences = await getService();
        res.status(200).json(incidences);
        next();
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const addIncidence = async(req, res, next) => {
    try {
        const data = req.body;
        const incidence = await postService(data);
        res.status(200).json(incidence);
        next();
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const updateIncidence = async(req, res, next) => {
    try {
        const id = req.query.id
        const data = req.body;
        const incidence = await putService(id, data);
        res.status(200).json(incidence);
        next();
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}

export const deleteIncidence = async(req, res, next) => {
    try {   
        const id = req.query.id;
        const incidence = await deleteService(id);
        res.status(200).json(incidence);
        next();
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}