import { Router } from "express";
import { validateToken } from "../jwt/token.js";
const homeStorage = Router();

homeStorage.get("/", (req, res) => {
    res.send("Incidents dashboard");
});


export default homeStorage;