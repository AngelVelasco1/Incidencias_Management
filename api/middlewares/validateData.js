import { check } from "express-validator";

const incidence = {
    id_user: "idUse",
    equipment: "equipmen",
    place: "plac",
    area: "are",
    status: "statu",
    priority: "priorit",
    category: "categor",
    start_date: "startDat",
    end_date: "endDat",
    description: "desc"
}
export const incidencesDtoV1 = [
    check(`${incidence.id_user}`)
        .notEmpty().withMessage("id_user is required")
        .isInt().withMessage("id_user must be an integer"),

    check(`${incidence.equipment}`)
        .notEmpty().withMessage("equipment is required")
        .isString().withMessage("equipment must be a string"),

    check(`${incidence.place}`)
        .notEmpty().withMessage("place is required")
        .isString().withMessage("place must be a string"),

    check(`${incidence.area}`)
        .notEmpty().withMessage("area is required")
        .isString().withMessage("area must be a string"),

    check(`${incidence.status}`)
        .notEmpty().withMessage("status is required")
        .isString().withMessage("status must be a string"),

    check(`${incidence.priority}`)
        .notEmpty().withMessage("priority is required")
        .isString().withMessage("priority must be a string"),

    check(`${incidence.category}`)
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category must be a string"),

    check(`${incidence.start_date}`)
        .notEmpty().withMessage("start_date is required")
        .isString().withMessage("start_date must be a date with format YYYY-MM-DD"),

    check(`${incidence.end_date}`)
        .notEmpty().withMessage("end_date is required")
        .isString().withMessage("end_date must be a date with format YYYY-MM-DD"),

    check(`${incidence.description}`)
        .notEmpty().withMessage("Description is required")
        .isString().withMessage("Description must be a string")
]