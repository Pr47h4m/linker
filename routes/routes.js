const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.getIndex);

router.get("/@:username", controller.getProfile);

router.use("/", controller.get404);

module.exports = router;
