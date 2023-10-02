import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import passport from "passport";
import { Strategy } from "passport-discord";
import { CONFIG } from "../config/credentials.js";
import { getConx } from "../db/conx.js";


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
            profile = {user, token}
             done(null, profile);
        } 
        else {
            const newUser = {
                discord_id: profile.id,
                username: profile.username,
                email: profile.email,    
                id_gender: 1,
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
passport.serializeUser(async (profile, done) => {
    try {
         done(null, profile)
    } catch(err) {  
        console.error({ err: err.message });
        done(err, null)
    }
});

passport.deserializeUser(async (data, done) => {
    try {
        const { profile, token } = data;
        const profileId = new ObjectId(profile._id);
        const profileDoc = await users.findOne({ _id: profileId });
        if (!userDoc) throw new Error("User not found");
    
         done(null, { profile: profileDoc, token });
    } catch(err) {
        console.error({ err: err.message });
        done(err, null);
    }
});


export default passport;

