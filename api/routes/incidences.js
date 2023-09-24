import { Router } from "express";
import * as controller from "../controllers/incidences.js"

export const crudRoutes = () => {
    const app = Router();

    app.get("/incidences", controller.getIncidences);
    app.post("/incidences", controller.addIncidence);
    app.put("/incidences", controller.updateIncidence);
    app.delete("/incidences", controller.deleteIncidence);

}