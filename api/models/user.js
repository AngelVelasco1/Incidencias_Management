import { getCollection } from "../db/conx.js";
import { autoIncrement } from "../helpers/autoincrement.js";

export class User {
    discord_id;
    username;
    email;
    id_role;
    id_gender;
    id_address;
    constructor(){};
    async conx () {
        try {
            const user = await getCollection("user");
            return user;
        } catch(err){
            console.log({err: err.message});
        }
    }
}
