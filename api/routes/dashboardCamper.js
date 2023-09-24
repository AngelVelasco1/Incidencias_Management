import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";

const dashboardStorage = Router();
dashboardStorage.get("/", validateToken, (req, res) => {
    res.send("Incidents dashboard");
});

export default dashboardStorage;