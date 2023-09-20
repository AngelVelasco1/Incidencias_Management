import { Router } from "express";

const homeStorage = Router();

homeStorage.get("/", (req, res) => {
    res.send("Incidents dashboard");
});


export default homeStorage;