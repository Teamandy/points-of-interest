const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/api') //all API-s at one place

const app = express()

//connecting to the DB
mongoose.connect('mongodb://localhost/pointsOfInterest')
mongoose.Promise = global.Promise

//body parsing before routes processing
app.use(bodyParser.json())

//handling API requests
app.use('/api', routes)

//handling errors
app.use((err, req, res, next) => {
    res.status(422).send({
        error: err.message
    })
})

//listening to the port 
app.listen(4000, () => {
    console.log('up and ready on port 4000...')
})