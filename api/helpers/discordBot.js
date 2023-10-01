import { Client, GatewayIntentBits } from "discord.js";
import { CONFIG } from "../config/credentials.js";

export const getRoles = (req, res, next) => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  
  
  client.on("ready", async () => {
    const guild = client.guilds.cache.get(client.guilds.cache.keys().next().value);

    const user = await guild.members.fetch(req.user.discord_id);

    const roles = user.roles.cache;
    const roleNames = roles.map(role => role.name);

    req.session.roles = roleNames.join(', ');
    console.log(`Los roles del usuario "${req.user.username}" en el servidor "${guild.name}" son: ${roleNames.join(', ')}`);
  });
  client.login(CONFIG.bot_token);
  next();

}