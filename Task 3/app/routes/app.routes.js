const router = require("express").Router()
const appClass = require("../controller/app.controller")
router.get("/", appClass.add )
router.get("/edit", appClass.edit )
router.get("/showAll", appClass.showAll )
router.get("/showSingle", appClass.showSingle )

module.exports = router