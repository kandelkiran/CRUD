const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let ProductSchema = new Schema({
	name: {type: String, required : true, max: 100},
	price: {type: Number, required: true},
	movie: {type: String, required: true, max: 80}
})

module.exports = Mongoose.model('Product',ProductSchema)
