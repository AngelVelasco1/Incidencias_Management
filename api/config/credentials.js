import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
    "server":  JSON.parse(process.env.SERVER),
    "user": process.env.ATLAS_USER,
    "password": process.env.ATLAS_PASSWORD,
    "db": process.env.ATLAS_DB,
    "client_id": process.env.DISCORD_CLIENT_ID,
    "client_secret": process.env.DISCORD_CLIENT_SECRET,
    "secret_session": process.env.SECRET_SESSION,
    "redirect_uri": process.env.DISCORD_REDIRECT_URI,   
    "private_key": process.env.PRIVATE_KEY
}