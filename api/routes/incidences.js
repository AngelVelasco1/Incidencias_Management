import { Router } from "express";
import * as controller from "../controllers/incidences.js"
import { incidencesDtoV1 } from "../middlewares/validateData.js";
import { incidencesValidate } from "../middlewares/validateResult.js";

export const crudRoutes = () => {
    const app = Router();

    app.get("/incidences", controller.getIncidences);
    app.post("/incidences", incidencesDtoV1, incidencesValidate, controller.addIncidence);
    app.put("/incidences", incidencesDtoV1, incidencesValidate, controller.updateIncidence, );
    app.delete("/incidences", controller.deleteIncidence);
    return app;
}