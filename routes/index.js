const router = require('express').Router()

router.get('/', async (req, res) => {
	res.json({
		success: true,
		message: "Hello World"
	})
})

module.exports = router
