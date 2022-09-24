const express = require('express')
const consign = require('consign');
const bodyParser = require('body-parser')

const PORT = 5000 

const app = express()
app.use(bodyParser.json());

consign().include('controllers').into(app);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})
