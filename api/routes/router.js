import { Router } from "express";
import { crudRoutes } from "./incidences.js";

export const initRoutes = () => {
    const app = Router();
    app.use("/", crudRoutes());
    return app;
}