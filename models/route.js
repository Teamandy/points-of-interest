const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RouteSchema = new Schema({
    origin: String,
    destination: String,
    time: Number,
    price: Number
})

const Route = mongoose.model('route', RouteSchema)

module.exports = Route