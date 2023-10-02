import { Router } from "express";
import passport from "../helpers/passportDiscord.js";
import { CONFIG } from "../config/credentials.js";

const loginStorage = Router();

loginStorage.get("/auth", passport.authenticate('discord') );
loginStorage.get("/auth/redirect", passport.authenticate('discord', {
    successRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardCamper`,
    failureRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/login`,
}));


export default loginStorage;