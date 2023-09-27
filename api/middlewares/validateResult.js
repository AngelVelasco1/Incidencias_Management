import { validationResult } from "express-validator";

export const incidencesValidate = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { idUse, equipmen, plac, are, statu, priorit, categor, startDat, endDat, desc } = req.body;   
    
    const data = {
        "id_user": idUse,
        "equipment": equipmen,
        "place": plac,
        "area": are,
        "status": statu,
        "priority": priorit,
        "category": categor,
        "start_date": startDat,
        "end_date": endDat,
        "description": desc
    }

    req.body = Object.keys(data).reduce((acc, key) => {
        if(data[key] != undefined) {
            acc[key] = data[key]
        }
        return acc;
    }, {})
    next();
}