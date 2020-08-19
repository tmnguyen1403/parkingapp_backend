const mongoose = require('mongoose')

const garageSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	location: {
		type: String,
		require: true,
	},
	capacity: {
		type: Number,
		require: true,
	},
	reserved: {
		type: Number,
	}
})
module.exports = mongoose.model("Garage", garageSchema)
