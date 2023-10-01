import { Router } from "express";
import passport, { setCookieTokenAndRoles } from "../helpers/passportDiscord.js";
import { CONFIG } from "../config/credentials.js";

const loginStorage = Router();
function redirectToDashboard(req, res, next) {
    const roles = req.session.roles;
    console.log(roles);
    if (roles.includes("Camper")) {
        res.redirect(`http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardCamper`);
    } else if (roles.includes("Trainer")) {
        res.redirect(`http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardTrainer`);
    } else if (roles.includes("Admin")) {
        res.redirect(`http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardAdmin`);
    } else {
        res.redirect(`http://${CONFIG.hostname}:${CONFIG.frontend_port}/login`);
    }
}

loginStorage.get("/auth", passport.authenticate('discord'));
loginStorage.get("/auth/redirect", passport.authenticate('discord', {
    successRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardCamper`,
    failureRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/login`,
}));


export default loginStorage;