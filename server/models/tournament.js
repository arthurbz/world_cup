const Match = require("../models/match")
const connection = require("../config/database");
const { DataTypes } = require("sequelize");

const Tournament = connection.define(
    "tournament",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Year: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Winner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        RunnersUp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Third: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fourth: {
            type: DataTypes.STRING,
            allowNull: false
        },
        GoalsScored: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        QualifiedTeams: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        MatchesPlayed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Attendance: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false
    }
);

Tournament.hasOne(Match);
Match.belongsTo(Tournament);
module.exports = Tournament;