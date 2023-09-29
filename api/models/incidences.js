import { getCollection } from "../db/conx.js";
import { autoIncrement } from "../helpers/autoincrement.js";

export class Incidences {
    id;
    id_user;
    equipment;
    place;
    area;
    status;
    priority;
    category;
    start_date;
    end_date;
    description
    constructor(){};

    async conx() {
        try {
            const incidence = await getCollection("incidences");
            return incidence;
        } catch(err) {
            console.log({err: err.message});
        };
    }



    async getIncidences(id) {
        try {
            const db = await this.conx();

            if(!id) return await db.find({}).toArray();
            return await db.findOne({ "id": parseInt(id) });
        } catch(err) {
            console.log({err: err.message});
        }
    }

    async addIncidence(data) { 
        try {
            const db = await this.conx();
            const id = await autoIncrement("incidences");
            const newIncidence = {
                id,
                ...data,
                "start_date": new Date(data.start_date),
                "end_date": new Date(data.end_date)
            }
            const result = await db.insertOne(newIncidence);
            return result

        } catch(err) {
            console.log({err: err.message});
        }
    }

    async updateIncidence(id, data) {
        try {
            const db = await this.conx();
            const updatedIncidence = {
                ...data,
                "start_date": new Date(data.start_date),
                "end_date": new Date(data.end_date)
            }
            const result = await db.updateOne({ "id": parseInt(id) }, { $set: updatedIncidence })
            return result

        } catch(err) {
            console.log({err: err.message});
        }
    }

    async deleteIncidence(id) {
        try {
            const db = await this.conx();
            const result = await db.deleteOne({ "id": parseInt(id) })
            return result
        } catch(err) {
            console.log({err: err.message});
        }
    }
}
