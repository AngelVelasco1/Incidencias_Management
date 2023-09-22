import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
    "hostname": process.env.VITE_HOSTNAME,
    "frontend_port": process.env.VITE_FRONTEND_PORT,
    "port": process.env.VITE_BACKEND_PORT,

    "user": process.env.ATLAS_USER,
    "password": process.env.ATLAS_PASSWORD,
    "db": process.env.ATLAS_DB,

    "client_id": process.env.DISCORD_CLIENT_ID,
    "client_secret": process.env.DISCORD_CLIENT_SECRET,
    "bot_token": process.env.DISCORD_BOT_TOKEN,
    "redirect_uri": process.env.DISCORD_REDIRECT_URI,   

    "secret_session": process.env.SECRET_SESSION,
    "private_key": process.env.PRIVATE_KEY
};