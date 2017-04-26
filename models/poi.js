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

const PointsSchema = new Schema({
    title: String,
    instagram_code: String,
    rating: Number,
    station: String,
    geometry: GeoSchema
})

const Points = mongoose.model('point', PointsSchema)

module.exports = Points