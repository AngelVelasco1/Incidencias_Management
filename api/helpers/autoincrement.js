import { getConx } from "../db/conx.js";

const db = await getConx();

export const autoIncrement = (collection) => {
    const counters = db.collection("counters");
    const response = db.counters.findOneAndUpdate(
       { counter: `${collection}Id`},
       { $inc: { sequence: 1 }},
       { returnDocument: "after" }
    )
    return response.value.sequence;
}
