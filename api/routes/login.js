import { Router } from "express";
import passport from "../helpers/passportDiscord.js";
import { CONFIG } from "../config/credentials.js";
import { getRoles } from "../helpers/discordBot.js";
const loginStorage = Router();

loginStorage.get("/auth", passport.authenticate('discord') );

loginStorage.use((req, res, next)  => {
    console.log(req.user);
    if (req.user && req.user.token) {
        res.cookie("token", req.user.token);
        const roles = getRoles(req.session.roles);
        console.log(roles);
    }
    next();
});
loginStorage.get("/auth/redirect", passport.authenticate('discord', {
    successRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/dashboardCamper`,
    failureRedirect: `http://${CONFIG.hostname}:${CONFIG.frontend_port}/login`,
}));


export default loginStorage;