import { Router } from "express";
import { crudRoutes } from "./incidences.js";

const app = Router();

export const initRoutes = () => {
    app.use("/", crudRoutes());
    return app;
}