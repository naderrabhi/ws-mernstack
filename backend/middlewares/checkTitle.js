const checkTitle = (req,res,next) => {
    if (req.body.title) {
        next()
    }else {
        res.status(400).send({msg : "title is required"})
    }
}

module.exports = checkTitle