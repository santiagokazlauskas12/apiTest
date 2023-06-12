const { Router } = require("express");
require("dotenv").config();
const { versionGet } = require("../controller/version");
const router = Router();

router.get("/", versionGet);

module.exports = router;
