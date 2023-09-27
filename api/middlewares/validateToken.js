export const validateToken = (req, res, next) => {
    try {
        next()
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}