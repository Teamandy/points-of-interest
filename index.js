const express = require('express')
const routes = require('./routes/api')//all API-s at one place

const app = express()

//handling API requests
app.use('/api', routes)

//listening to the port 
app.listen(4000, ()=>{
    console.log('up and ready on port 4000...')
})