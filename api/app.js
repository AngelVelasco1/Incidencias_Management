import express from 'express';
import session from 'express-session';
import passport from "passport"
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loginStorage from './routes/login.js';
import { CONFIG } from "./config/credentials.js";
import { initRoutes } from './routes/router.js';
import { setCookieTokenAndRoles } from './helpers/passportDiscord.js';

const app = express();

app.use(cors({
    origin: `http://${CONFIG.hostname}:${CONFIG.frontend_port}`,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: CONFIG.secret_session,
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

app.use("/api/login", setCookieTokenAndRoles, loginStorage);
app.use("/app", initRoutes());

export default app;