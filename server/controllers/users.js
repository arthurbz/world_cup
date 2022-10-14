const { Op } = require("sequelize");
const User = require("../models/user")

module.exports = app => {
    app.get("/user", async (req, res) => {
        try {
            const Email = req.body.Email
            const user = await User.findOne(
                {
                    attributes: ["Name", "Password", "Email"],
                    where: { Email }
                }
            ) 

            if (user)
                res.status(200).json(user)
            else
                res.status(200).json("User not found")
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Something failed :o" })
        }
    })

    app.post("/user", async (req, res) => {
        try {
            const user = req.body
            const result = await User.create(user)

            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(200).json({ message: "Something went wrong!", error: error.name + " - " + error?.errors[0].message })
        }
    })
}