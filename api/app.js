import express from 'express';
import cors from 'cors';
import loginStorage from './routes/login.js';
import homeStorage from './routes/home.js';
import session from 'express-session';
import passport from "passport"
import { CONFIG } from "./config/credentials.js";
import { runBot } from "./helpers/discordBot.js"


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

app.use("/login", loginStorage);
app.use("/home", runBot, homeStorage);


export default app;

