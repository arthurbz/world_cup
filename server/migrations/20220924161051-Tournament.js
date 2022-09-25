'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable(
            'tournaments',
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
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('tournaments');
    }
};
