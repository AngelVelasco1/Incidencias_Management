import express from 'express';
import session from 'express-session';
import passport from "passport"
import { CONFIG } from "./config/credentials.js";
import { getRoles } from "./helpers/discordBot.js";
import cors from 'cors';
import { setCookieToken } from './helpers/passportDiscord.js';
import loginStorage from './routes/login.js';
import homeStorage from './routes/dashboardCamper.js';
import { initRoutes } from './routes/router.js';
import { validateToken } from './middlewares/validateToken.js';


const app = express();

app.use(cors({
    origin: `http://${CONFIG.hostname}:${CONFIG.frontend_port}`,
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200,
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
app.use("/api/dashboard", setCookieToken, getRoles, homeStorage);
app.use("/app", initRoutes);


export default app;

