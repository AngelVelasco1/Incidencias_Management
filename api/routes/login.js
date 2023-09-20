import { Router } from "express";
import passport from "../helpers/passportDiscord.js";

const loginStorage = Router();

loginStorage.get("/auth", passport.authenticate('discord'), (req, res) => {
    res.status(200).send("Logged in");
});
loginStorage.get("/auth/redirect", passport.authenticate('discord', {
    successRedirect: "/home",
    failureRedirect: "/"
}));

export default loginStorage;