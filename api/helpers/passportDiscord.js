import passport from "passport";
import { Strategy } from "passport-discord";
import { CONFIG } from "../config/credentials.js";
import { getConx } from "../db/conx.js";
import { ObjectId } from "mongodb";
import { createToken } from "../jwt/token.js";

const db = await getConx();
const users = db.collection("user")

passport.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: CONFIG.redirect_uri,
    scope: ["identify", "guilds", "email", "guilds.members.read"]
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await users.findOne({ discord_id: profile.id });
        if (user) {
            return done(null, user);
        } 
        else {
            const newUser = {
                discord_id: profile.id,
                username: profile.username,
                email: profile.email,                
            };
            const { insertedId } = await users.insertOne(newUser);
            const newUserInfo = {
                _id: insertedId,
                info: newUser,
            }
            return done(null, newUserInfo);
        }   
    }
    catch (err) {
        console.error({ err: err.message });
        return done(err, null)
    }
}));


passport.serializeUser(async (user, done) => {
    try {
        done(null, user._id)
    } catch(err) {
        console.error({ err: err.message });
        done(err, null)
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await users.findOne({ _id: new ObjectId(id) })
        if(!user) throw new Error("User not found");
        done(null, user)
    } catch(err) {
        console.error({ err: err.message });
        done(err, null)
    }
})

export default passport;
