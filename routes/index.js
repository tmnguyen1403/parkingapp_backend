const router = require('express').Router()

router.get('/', async (req, res) => {
	const {seed} = require('../garageSeed')
	const garage = await seed()
	res.json({
		success: true,
		message: "Hello World",
		garage,
	})
})

module.exports = router
