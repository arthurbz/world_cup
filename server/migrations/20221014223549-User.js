"use strict";
const { DataTypes } = require("sequelize")

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "users",
            {
                Id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                Name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                Password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    }
                },
                Email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        notEmpty: true
                    }
                }
            },
            {
                createdAt: false,
                updatedAt: false
            }

        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    }
};
