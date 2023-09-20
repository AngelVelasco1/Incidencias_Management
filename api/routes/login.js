import { Router } from "express";
import passport from "passport";
const authStorage = Router();


authStorage.get("/login", passport.authenticate("discord"));
authStorage.get("/login/redirect", passport.authenticate("discord", {
    successRedirect: "/home",
    failureRedirect: "/"
}));

export default authStorage ;