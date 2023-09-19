import { getCollection } from "../db/conx.js";
import { autoIncrement } from "../helpers/autoincrement.js";

export class User {
    id;
    discordId;
    username;
    guilds;
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
