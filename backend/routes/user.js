const { Router } = require("express");
const { signIn, register } = require("../controllers/user/authController");

const router = Router();

router.post("/signin", signIn);
router.post("/register", register);

module.exports = router;
