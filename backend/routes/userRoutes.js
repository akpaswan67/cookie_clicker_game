const express = require("express");
const { getUser, createUser, incrementScore } = require("../controllers/userController");
const router = express.Router();
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id/score", incrementScore);
module.exports = router;
