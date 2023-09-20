import jwt from "jsonwebtoken"
import { getConx } from "../db/conx.js" 
import { ObjectId } from "mongodb";
import { CONFIG } from "../config/credentials.js";

const db = await getConx();
const private_key = CONFIG.private_key;


export const createToken = async (req, res, next) => {
    const bodyProperties = Object.keys(req.body);
    if (bodyProperties.length === 0) return res.status(400).send({message: "Data not found"});
    
    const result = await db.collection('user').findOne({ discord_id: req.body.discord_id , email: req.body.email });
    if (!result) return res.status(401).send({message: 'User not found'});

    const id = result._id.toString();
    const token = jwt.sign({ discord_id: id }, CONFIG.private_key, { expiresIn: '3h' });
    
    req.data = {status: 200, message: token};
    next(); 

}

export const validateToken = async (req, token) => {
        try {
            const jwtData = jwt.verify(token, CONFIG.private_key);
            const res = await db.collection('user').findOne(
                {
                    _id: new ObjectId(jwtData.discord_id), 
                    [`allowances.${req.baseUrl}`]: req.headers["accept-version"]
                }
            );
            
            if (!res || !res.allowances[req.baseUrl].includes(req.method)) {
                throw new Error("Not authorized");
            }
            
            const { _id, allowances, ...user } = res;
            return user;
        } 
        catch (error) { 
            return { message: error.message };
        }

}