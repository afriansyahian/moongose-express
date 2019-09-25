const express = require("express");
const router = express.Router();

const{ addUser, getUser, deleteUser, updateUser} = require("../controllers/user")


router.post("/", addUser)
router.get("/", getUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)
module.exports = router;