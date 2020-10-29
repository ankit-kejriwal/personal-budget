const express = require("express")
const budget=require("./models/budgetSchema")
const router = express.Router()

router.get("/budget", async (req, res) => {
	const data = await budget.find()
	res.send(data)
})

router.post("/pushdata", async (req, res) => {
	const budget1 = new budget({
		title: req.body.title,
        budget: req.body.budget,
        color: req.body.color
	})
	await budget1.save()
	res.send(budget1)
})

module.exports = router