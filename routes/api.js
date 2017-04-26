const express = require('express')
const router = express.Router()

//get poi from the DB
router.get('/poi', (req, res) => {
    res.send('get request')
})

//post poi to the DB
router.post('/poi', (req, res) => {
    res.send('post request')
})

module.exports = router