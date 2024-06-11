exports.authenticateUser = (req, res, next) => {
    const authenticatedUser = {
        username: "Ruben",
        password: "123"
    }

    if(authenticatedUser.username === req.body.username && authenticatedUser.password === req.body.password){
        return next()
    }

    return res.status(401).json({
        message: "Unauthorized"
    })
}