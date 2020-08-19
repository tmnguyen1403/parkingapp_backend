const Garage = require('./models/garage')

const seed = async seed => {

	try {
	const new_garage = await Garage.create({
		name: "First gargage",
		location: "UHD",
		capacity: 200,
		reserved: 0,
	})
	return new_garage
	} catch (error) {
		console.log(`Error in Seed ${error.message}`)
	}
}

module.exports ={
	seed,
}
