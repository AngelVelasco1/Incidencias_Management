import express from 'express';
import cors from 'cors';
import authStorage from './routes/auth.js';
import homeStorage from './routes/home.js';
import session from 'express-session';
import passport from "passport"
import * as passportDiscord from "./helpers/passportDiscord.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/app", authStorage)
app.use("/app/home", homeStorage)

export default app;

