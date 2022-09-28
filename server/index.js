const express = require('express')
const consign = require('consign')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 5000 

async function main() {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())

    await configureConnection()
    consign().include('controllers').into(app)

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`)
    })
}

async function configureConnection() {
    const connection = require('./config/database')

    const Tournament = require('./models/tournament')
    const Match = require('./models/match')
    Tournament.hasMany(Match, { foreignKey: "Year", constraints: false });
    Match.belongsTo(Tournament, { foreignKey: "Year", constraints: false });

    await connection.sync()

    return true
}

main()