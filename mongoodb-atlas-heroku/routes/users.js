var express = require('express');
var router = express.Router();
const userController = require("../controllers/user")

router.post("/register", userController.createUser)
router.post("/login", userController.login)
router.get("/show", userController.getAllData)

module.exports = router;
