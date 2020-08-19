module.exports.connect = () => {
	const mongoose = require("mongoose"),
	dbURL = "mongodb://localhost:27017/",
	dbName = "parking_garage";
	db = process.env.MONGODB_URI || dbURL + dbName
	mongoose.connect(db,
		{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
		(error, result) =>
		{
			if (error)
				console.log("Error in connection", error)
			else
				console.log(`Connect successfully to db: ${dbName}`)
			}
	)
	mongoose.Promise = global.Promise
	//turn off warning when use findOneAndUpdate
	mongoose.set('useFindAndModify', false)
}
