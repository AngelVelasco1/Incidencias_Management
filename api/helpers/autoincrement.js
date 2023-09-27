import { getConx } from "../db/conx.js";

    export const autoIncrement = async (collection) => {
        try {
            const db = await getConx();
            const counter = db.collection("counters");
            const sequenceValues = await counter.findOneAndUpdate(
            { counter: `${collection}Id`},
            { $inc: { sequence_value: 1 }},
            { returnDocument: "after" }
            )
            return sequenceValues.sequence_value;
        } catch(err) {
            console.log({err: err.message});
        }
    
    }