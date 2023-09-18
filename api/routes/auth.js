import { Router } from "express";
import passport from "passport";

const authStorage = Router();

export default authStorage.get("/login", passport.authenticate('discord'));