import { Router } from "express";

const authHome = Router();

authHome.get("/", (req, res) => {
    res.send("Incidents dashboard");
});


export default authHome;