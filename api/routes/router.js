import { Router } from "express";
import { crudRoutes } from "./incidences.js";

export const initRoutes = () => {
    app.use("/", crudRoutes());
    return app;
}