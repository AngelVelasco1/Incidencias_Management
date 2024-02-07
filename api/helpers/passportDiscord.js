import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy } from "passport-discord";
import { CONFIG } from "../config/credentials.js";
import { getConx } from "../db/conx.js";


const db = await getConx();
const users = db.collection("user");
const private_key = CONFIG.private_key;


passport.serializeUser(async (user, done) => {
    done(null, user)
});

passport.deserializeUser(async (data, done) => {
        const { user, token } = data;

        done(null, { user, token });
});

passport.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: CONFIG.redirect_uri,
    scope: ["identify", "email"],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await users.findOne({ discord_id: profile.id });
        if (user) {
            const token = jwt.sign({ discord_id: user.discord_id }, private_key, { expiresIn: '3h' });
            profile = { user, token }
            done(null, profile);
        }
        else {
            const newUser = {
                discord_id: profile.id,
                username: profile.username,
                email: profile.email,
                id_address: 1
            };
            const { insertedId } = await users.insertOne(newUser);
            const newUserInfo = {
                _id: insertedId,
                info: newUser,
            }
            const token = jwt.sign({ discord_id: newUserInfo.info.discord_id }, private_key, { expiresIn: '3h' });
            profile = { user: newUserInfo, token }
            done(null, profile);
        }

    }
    catch (err) {
        console.error({ err: err.message });
        return done(err, null)
    }
}));



export default passport;

