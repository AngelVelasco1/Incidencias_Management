import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";

const dashboardStorage = Router();
dashboardStorage.get("/", (req, res) => {
    res.send("Incidents dashboard");
});

export default dashboardStorage;