const { Op } = require("sequelize");
const Tournament = require("../models/tournament")
const Match = require("../models/match")

module.exports = app => {
    app.get("/worldcup/:year", async (req, res) => {
        try {
            const Year = req.params.year
            const tournament = await Tournament.findOne(
                {
                    attributes: ["Country", "Winner", "RunnersUp"],
                    where: { Year }
                }
            ) 

            if (tournament)
                res.status(200).json(tournament)
            else
                res.status(200).json("Perhaps there was no WorldCup that year :P")
        } catch (error) {
            res.status(500).json({ message: "Something failed :o" })
        }
    })

    app.get("/worldcup/details/:year", async (req, res) => {
        try {
            const Year = req.params.year
            const match = await Match.findOne(
                {
                    attributes: [
                        "Datetime",
                        "Stadium",
                        "HomeTeamInitials",
                        "HomeTeam",
                        "HomeTeamGoals",
                        "AwayTeamInitials",
                        "AwayTeam",
                        "AwayTeamGoals"
                    ],
                    where: { Year },
                    include: [{
                        model: Tournament,
                        attributes: ["Country", "Winner", "RunnersUp"]
                    }]
                }
            )

            if (match)
                res.status(200).json({ details: match })
            else
                res.status(200).json("Perhaps there was no WorldCup that year :P")
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Something failed :o" })
        }
    })

    app.get("/worldcup/finals/:year", async (req, res) => {
        try {
            const Year = req.params.year
            const match = await Match.findOne(
                {
                    attributes: [
                        "Datetime",
                        "Stadium",
                        "HomeTeamInitials",
                        "HomeTeam",
                        "HomeTeamGoals",
                        "AwayTeamInitials",
                        "AwayTeam",
                        "AwayTeamGoals",
                        "WinConditions",
                    ],
                    where: { Year }
                }
            ) 

            if (match)
                res.status(200).json(match)
            else
                res.status(200).json("Perhaps there was no WorldCup that year :P")
        } catch (error) {
            res.status(500).json({ message: "Something failed :o" })
        }
    })

    app.get("/worldcup/country/:country", async (req, res) => {
        try {
            const Country = req.params.country
            const tournament = await Tournament.findAll(
                {
                    attributes: ["Year", "Country", "Winner", "RunnersUp", "Third", "Fourth"],
                    where: {
                        [Op.or]: [
                            { "Winner": Country },
                            { "RunnersUp": Country },
                            { "Third": Country },
                            { "Fourth": Country },
                        ]
                    } 
                }
            ) 
            
            tournament.forEach((t) => {
                if (t.Winner == Country)
                    t.dataValues.Position = "Winner"

                else if (t.RunnersUp == Country)
                    t.dataValues.Position = "RunnersUp"

                else if (t.Third == Country)
                    t.dataValues.Position = "Third"

                else if (t.Fourth == Country)
                    t.dataValues.Position = "Fourth"
                
                delete t.dataValues.Winner
                delete t.dataValues.RunnersUp
                delete t.dataValues.Third
                delete t.dataValues.Fourth
            })

            if (tournament.length > 0)
                res.status(200).json(tournament)
            else
                res.status(200).json("This country never finished 4th or best!")
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Something failed :o" })
        }
    })

    app.post("/worldcup/match", async (req, res) => {
        try {
            const match = req.body
            const result = await Match.create(match)

            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(200).json({ message: "Something went wrong!", error: error.name + " - " + error?.errors[0].message })
        }
    })

    app.post("/worldcup/tournament", async (req, res) => {
        try {
            const tournament = req.body
            const result = await Tournament.create(tournament)

            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(200).json({ message: "Something went wrong!", error: error.name + " - " + error?.errors[0].message })
        }
    })
}