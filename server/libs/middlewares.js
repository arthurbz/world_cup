const express = require('express');
const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json());
    app.set("json spaces", 4)
    app.use(express.json())
    app.use(app.auth.initialize())
}