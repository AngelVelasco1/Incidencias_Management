import passport from "passport";
import { Strategy } from "passport-discord";
import jwt from "jsonwebtoken"
import { CONFIG } from "../config/credentials.js";
import { getConx } from "../db/conx.js";
import { ObjectId } from "mongodb";

const db = await getConx();
const users = db.collection("user");
const private_key = CONFIG.private_key;


passport.use(new Strategy({
    clientID: CONFIG.client_id,
    clientSecret: CONFIG.client_secret,
    callbackURL: CONFIG.redirect_uri,
    scope: ["identify", "guilds", "email", "guilds.members.read", "bot", "applications.commands"],
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await users.findOne({ discord_id: profile.id });
        if (user) {
            const token = jwt.sign({ discord_id: user.discord_id }, private_key, { expiresIn: '3h' });
            console.log(token);
            return done(null, {user, token});
        } 
        else {
            const newUser = {
                discord_id: profile.id,
                username: profile.username,
                email: profile.email,    
                id_role: 1,
                id_gender: 1,
                id_address: 1         
            };
            const { insertedId } = await users.insertOne(newUser);
            const newUserInfo = {
                _id: insertedId,
                info: newUser,
            }
            const token = jwt.sign({ discord_id: newUserInfo.info.discord_id }, private_key, { expiresIn: '3h' });
            console.log(token);
            return done(null, { user: newUserInfo, token });
        }   

    }
    catch (err) {
        console.error({ err: err.message });
        return done(err, null)
    }
}));


passport.serializeUser(async (userTokenPair, done) => {
    try {
        done(null, userTokenPair)
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
