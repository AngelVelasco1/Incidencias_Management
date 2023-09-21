import { Client, GatewayIntentBits } from "discord.js";
import { CONFIG } from "../config/credentials.js";

export const runBot = (req, res, next) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] })
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.on('ready', () => {
        console.log();
    });

    client.login(CONFIG.bot_token);
    next();
}

    

