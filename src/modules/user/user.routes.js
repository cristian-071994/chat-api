const { Router } = require("express");
const { User, Participant } = require("../../models");
const {
  registerUser,
  loginUser,
  validateUserEmail,
  getAllUsers,
} = require("./user.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { registerUserValidator, loginValidatior } = require("./user.validators");
const router = Router();

router
  .route("/") //api/v1/users
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser)
  .get(async (req, res, next) => {
    try {
      const result = await User.findAll({
        include: {
          model: Participant,
        },
      });
      //establecer el header content - type: application/json
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

router.post("/login", loginValidatior, loginUser);

router.post("/validate", validateUserEmail);

module.exports = router;
