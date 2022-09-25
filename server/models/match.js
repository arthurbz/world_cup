const Tournament = require("../models/tournament")
const connection = require("../config/database");
const { DataTypes } = require("sequelize");

const Match = connection.define(
    "match",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: { model: Tournament, key: "Year" }
        },
        Datetime: {
            type: DataTypes.DATE,
            default: null
        },
        Stage: {
            type: DataTypes.STRING,
            default: null
        },
        Stadium: {
            type: DataTypes.STRING,
            default: null
        },
        City: {
            type: DataTypes.STRING,
            default: null
        },
        HomeTeam: {
            type: DataTypes.STRING,
            default: null
        },
        HomeTeamInitials: {
            type: DataTypes.STRING,
            default: null
        },
        HomeTeamGoals: {
            type: DataTypes.INTEGER,
            default: null
        },
        AwayTeam: {
            type: DataTypes.STRING,
            default: null
        },
        AwayTeamInitials: {
            type: DataTypes.STRING,
            default: null
        },
        AwayTeamGoals: {
            type: DataTypes.INTEGER,
            default: null
        },
        WinConditions: {
            type: DataTypes.STRING,
            default: null
        },
        Referee: {
            type: DataTypes.STRING,
            default: null
        },
    },
    {
        createdAt: false,
        updatedAt: false
    }
);

module.exports = Match;