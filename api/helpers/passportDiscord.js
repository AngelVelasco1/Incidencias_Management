import passport from "passport";
import { Strategy } from "passport-discord"
import { CONFIG } from "../config/credentials.js";


passport.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: CONFIG.redirect_uri,
    scope: ["identify", "guilds"]
}, async (accessToken, refreshToken, profile, done) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(CONFIG.bot_token);
}));

