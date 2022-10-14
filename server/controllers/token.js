const jwt = require('jwt-simple')
const cfg = require('../config/config_jwt')

const User = require('../models/user')

module.exports = app => {

    app.post("/token", async (req, res) => {
        const { Name, Email, Password } = req.body
        const user = await User.findOne({
            where: {
                Name,
                Email,
                Password
            }
        })
        if (user) {
            const payload = user.Id
            const token = jwt.encode(payload, cfg.jwtSecret);
            res.status(201).json({"token": token})
        } else {
            res.status(401).json("Não autorizado") 
        }
    })
};