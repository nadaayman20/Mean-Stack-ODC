const router = require("express").Router()
const taskControl = require("../controller/book.controller")

router.get("/", taskControl.allBooks)

router.get("/add", taskControl.addBooks)
router.get("/addLogic", taskControl.addMyLogic)

router.get("/addPost", taskControl.addPostBooks)
router.post("/addPost", taskControl.addMyLogic)

router.get("/single/:id", taskControl.single)

router.get("/del/:id", taskControl.delBooks)

router.get("/search/:id", taskControl.searchBooks)
router.get("/search/:id", taskControl.searchBookGetLogic)

router.get("/edit/:id", taskControl.editBooks)
router.post("/edit/:id", taskControl.editBooksLogic)

module.exports = router