"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable(
            "matches",
            {
                Id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                Year: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: { model: "tournaments", key: "Year" }
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
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable("matches");
    }
};
