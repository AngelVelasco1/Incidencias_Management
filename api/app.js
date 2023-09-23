import express from 'express';
import session from 'express-session';
import passport from "passport"
import { CONFIG } from "./config/credentials.js";
import { getRoles } from "./helpers/discordBot.js";
import cors from 'cors';
import loginStorage from './routes/login.js';
import homeStorage from './routes/dashboardCamper.js';

const app = express();

app.use(cors({
    origin: `http://${CONFIG.hostname}:${CONFIG.frontend_port}`,
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"]

}));
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

