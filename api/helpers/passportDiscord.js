import passport from "passport";
import { Strategy } from "passport-discord";
import { User } from "../models/user.js";
import { getCollection } from "../db/conx.js";
import { CONFIG } from "../config/credentials.js";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const collection = await getCollection("user");
    const user = await collection.findOne({discordId: id});
    done(null, user)
});

passport.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: "/app/login/redirect",
    scope: ["identify", "guilds", "roles_connection.write"]
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const newUser = new User({
            discordId: profile.id,
            username: profile.username,
            guilds: profile.guilds,
        });
        done(null, newUser);
    } catch(err) {
        console.error({error: err.message});
        return done(err, null);
    }
}
));

