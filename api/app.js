import express from 'express';
import cors from 'cors';
import loginStorage from './routes/login.js';
import homeStorage from './routes/dashboardCamper.js';
import session from 'express-session';
import passport from "passport"
import { CONFIG } from "./config/credentials.js";
import { getRoles } from "./helpers/discordBot.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
    secret: CONFIG.secret_session,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/login", loginStorage);
app.use("/api/dashboard", getRoles, homeStorage);


export default app;

