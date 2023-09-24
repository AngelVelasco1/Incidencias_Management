export const validateToken = (req, res, next) => {
    try {
        console.log(req.headers);
        next()
    } catch(err) {
        res.status(500).send({error: err.message});
    }
}