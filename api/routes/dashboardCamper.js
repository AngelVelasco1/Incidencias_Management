import { Router } from "express";

const dashboardStorage = Router();
dashboardStorage.get("/", (req, res) => {
    res.send("Incidents dashboard");
});

export default dashboardStorage;