const { Router } = require("express");
const {
  signIn,
  register,
} = require("../../controllers/userControllers/auth.controller");

const router = Router();

router.post("/signin", signIn);
router.post("/register", register);

module.exports = router;
