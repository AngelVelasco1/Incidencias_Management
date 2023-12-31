import express from 'express';
import session from 'express-session';
import passport from "passport"
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loginStorage from './routes/login.js';
import { CONFIG } from "./config/credentials.js";
import { initRoutes } from './routes/router.js';

const app = express();

app.use(cors({
    origin: `http://${CONFIG.hostname}:${CONFIG.frontend_port}`,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));
app.use(express.json());
app.use(session({
    secret: CONFIG.secret_session,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false
    }
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/login", loginStorage);
app.use("/app", initRoutes());

export default app;