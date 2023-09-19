import { Client, GatewayIntentBits } from "discord.js";
import { User } from "../models/user.js";
import { getCollection } from "../db/conx.js";
import { CONFIG } from "../config/credentials.js";


const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    console.log(message);
})
client.login(CONFIG.bot_token);