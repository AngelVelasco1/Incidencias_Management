import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
    "server":  JSON.parse(process.env.SERVER),
    "user": process.env.ATLAS_USER,
    "password": process.env.ATLAS_PASSWORD,
    "db": process.env.ATLAS_DB,
    "client_id": process.env.DISCORD_CLIENT_ID,
    "client_secret": process.env.DISCORD_CLIENT_SECRET,
    "redirect_uri": process.env.DISCORD_REDIRECT_URI,   
    "bot_token": process.env.DISCORD_BOT_TOKEN,
    "private_key": process.env.PRIVATE_KEY
}