import passport from "passport";
import { Strategy } from "passport-discord";
import { User } from "../models/user.JS"
import { CONFIG } from "../config/credentials";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, user)
});

app.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: "/app/login/redirect",
    scope: ["identify", "guilds"]
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile);

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

