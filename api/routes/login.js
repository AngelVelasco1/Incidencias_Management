import { Router } from "express";
import passport from "../helpers/passportDiscord.js";


const loginStorage = Router();

loginStorage.get("/auth",  passport.authenticate('discord'));
loginStorage.get("/auth/redirect", passport.authenticate('discord', {
    successRedirect: "/api/dashboard",
    failureRedirect: "/"
}), );

export default loginStorage;