import { MongoClient } from "mongodb";
import { CONFIG } from "../config/credentials.js"

export const getConx = async () => {
    try {
        const uri = `mongodb+srv://${CONFIG.user}:${CONFIG.password}@cluster0.tfk8jyc.mongodb.net/${CONFIG.db}`;
        const options = {
            retryWrites: true
        }

        const client = await MongoClient.connect(uri, options);
        return client.db();
    } 
    catch (err) {
        return { status: 500, message: err.message }
    }
}

export const getCollection = async(collection) => {
    const db = await getConx();
    const newCollection = db.createCollection(collection);
    return newCollection;

}