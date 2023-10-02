import passport from "passport";
import jwt from "jsonwebtoken"
import { Strategy } from "passport-discord";
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
            console.log(user);
            console.log(token);
            return done(null, {user, token});
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
            return done(null, { user: newUserInfo, token });
        }   

    }
    catch (err) {
        console.error({ err: err.message });
        return done(err, null)
    }
}));
passport.serializeUser(async (user, done) => {
    try {
        done(null, user)
    } catch(err) {  
        console.error({ err: err.message });
        done(err, null)
    }
});

passport.deserializeUser(async (data, done) => {
    try {
        const { user, token } = data;
        const userId = new ObjectId(user._id);
        const userDoc = await users.findOne({ _id: userId });
        if (!userDoc) throw new Error("User not found");
    
        done(null, { user: userDoc, token });
    } catch(err) {
        console.error({ err: err.message });
        done(err, null);
    }
});

export const setCookieToken = (req, res, next) => {
    if (req.user && req.user.token) {
        res.cookie("token", req.user.token);
    }
    next();
};

export default passport;

