const express = require('express')
const router = express.Router()

const Station = require('../models/station')
const Route = require('../models/route')
const Points = require('../models/poi')
const User = require('../models/user')

//get station coordinates from the DB
router.get('/poi/:station', (req, res) => {
    Station.findOne({title: req.params.station}).then((station)=>{
        const coords = station.geometry.coordinates
        res.send(coords)
    })
})

//get POI from the DB
router.get('/poi', (req, res) => {
    Points.geoNear({
        type: 'Point',
        coordinates: [parseFloat(req.query.lon), parseFloat(req.query.lat)]
    }, {
        maxDistance: 300000, // search for 300km around 
        spherical: true
    }).then((points) => {
        res.send(points)
    })
})

//post POI to the DB
router.post('/post/:addToModel', (req, res, next) => {
    switch (req.params.addToModel) {
        case 'station':
            Station.create(req.body).then((station) => {
                res.send(station)
            }).catch(next)
            break
        case 'route':
            Route.create(req.body).then((route) => {
                res.send(route)
            }).catch(next)
            break
        case 'poi':
            Points.create(req.body).then((point) => {
                res.send(point)
            }).catch(next)
            break
        case 'user':
            User.create(req.body).then((user) => {
                res.send(user)
            }).catch(next)
            break
    }
})

module.exports = router