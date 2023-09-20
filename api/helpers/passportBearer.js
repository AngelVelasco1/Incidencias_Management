import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { validateToken } from "../jwt/token.js";

passport.use(new BearerStrategy(
    { passReqToCallback: true },
    async function(req, token, done) {
        const usuario = await validateToken(req, token);
        if(!usuario) return done(null, false);
        return done(null, usuario);
    }
));

export default passport;