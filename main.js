const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')
app.use(router)
app.listen(port, (error, res) => {
	if (error)
		console.log(`Error ${error}`)
	else
		console.log(`Listen to ${port}`)
})
