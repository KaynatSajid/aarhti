const app = require("../Main/app");
const express = require("express");
const userControllers = require("../Controllers/userControllers");
const authControllers = require("../Controllers/authController");
const sellerCropsController = require("../Controllers/sellerCropsController");
const router = express.Router();

router.route("/").get(authControllers.protect, userControllers.getUsers);

router.route("/signup").post(authControllers.signUp);
router.route("/login").post(authControllers.logIn);
//authControllers.protect,

//router.route('/seller').get(authControllers.protect,sellerCropsController.getCrops)

router
  .route("/:id")
  .get(/* authControllers.protect, */ userControllers.getUser)
  .patch(/* authControllers.protect, */ userControllers.updateUser)
  .delete(userControllers.deleteUser);

router.route("*").all((req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `roter ${req.originalUrl} not found`,
  });
});

module.exports = router;
