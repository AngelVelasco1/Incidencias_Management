import passport from "passport";
import { Strategy } from "passport-discord";
import { User } from "../models/user.js"
import { CONFIG } from "../config/credentials.js";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
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
            id,
            id_discord: profile.id,
            id_role,
            id_area,
            username: profile.username,
            guilds: profile.guilds
        });
        done(null, newUser);
    } catch(err) {
        console.error({error: err.message});
        return done(err, null);
    }
}
));

