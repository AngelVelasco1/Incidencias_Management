import { SignJWT, jwtVerify } from "jose"
import { getConx } from "../db/conx.js" 
import { ObjectId } from "mongodb";
import {CONFIG} from "../utils/config.js";

const db = await getConx();
const encoder = new TextEncoder();

export const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Data not founded"});
    const result = await db.collection('user').findOne(req.body);

    if (JSON.stringify(Object.keys(req.body)) !== JSON.stringify(['name', 'password'])) return res.status(417).send({message: "el valor que debes suministrar para el inicio de la sesión debe ser el name y la password."})
    if (!result) return res.status(401).send({mesaage: "session no encontrada"});

    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(CONFIG.private_key));
    req.data = {status: 200, message: jwtConstructor};
    next(); 
}


export const validateToken = async (req, token) => {
    try {
        const jwtData = await jwtVerify(
            token,
            encoder.encode(CONFIG.private_key)
        );
        let res = await db.collection('user').findOne(
            {
                _id: new ObjectId(jwtData.payload.id), 
                [`allowances.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        const error = {message: "Not authorized"}
        if(!res.allowances[req.baseUrl].includes(req.method)) return error; 
        let {_id, allowances, ...user} = res;
        return user;
    } catch (error) { 
        return false;
    }
}