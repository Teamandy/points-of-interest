const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates:{
        type: [Number],
        index: '2dsphere'
    }
})

const StationSchema = new Schema({
    title: String,
    code: String,
    geometry: GeoSchema
})

const Station = mongoose.model('station', StationSchema)

module.exports = Station