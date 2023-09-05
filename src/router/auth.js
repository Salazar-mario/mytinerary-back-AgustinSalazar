const { Router } = require("express");
const register = require("../controllers/auth");
const validator = require("../middlewares/validator");
const registerSchema = require("../schemas/register");
const existsUser = require("../middlewares/user");
const validPassword = require("../middlewares/password");

const auth_router = Router();

auth_router.post('/signup', validator(registerSchema), existsUser, validPassword, register);

module.exports = auth_router;
