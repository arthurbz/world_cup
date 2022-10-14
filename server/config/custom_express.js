const conexao = require('./database')

const express = require('express')
const consign = require('consign')

module.exports =  () => {
    // criando a aplicação - instância do express
    
    const app = express()

    return app
}
