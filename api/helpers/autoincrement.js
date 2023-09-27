import { getConx } from "../db/conx.js";

export const autoIncrement = async (collection) => {
    try {
        const db = await getConx();
        const counter = db.collection("counters");
        const secuencesValues = await counter.findOneAndUpdate(
           { counter: `${collection}Id`},
           { $inc: { sequenceValue: 1 }},
           { returnDocument: "after" }
        )
        return secuencesValues.value.sequenceValue;
    } catch(err) {
        console.log({err: err.message});
    }
   
}
