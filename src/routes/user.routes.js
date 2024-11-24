import { Router } from "express";

const router = Router();

router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/password/forgot").post(forgetPassword);
router.route("/auth/password/reset").post(resetPassword); // frontend is mobile app (modify)

// user profile secure routes
router.route("/user/verify-token").post(verifyUserJwt, verifyUserJwtToken);
router.route("/user/current").get(verifyUserJwt, getCurrentUser);
router.route("/user/profile").put(verifyUserJwt, updateUserProfileDetails);
router.route("/user/profile/address").put(verifyUserJwt, updateUserAddress);
router.route("/auth/logout").post(verifyUserJwt, logoutUser);
router.route("/user/:id").delete(verifyUserJwt, deleteUser);

// user orders secure routes
router.route("/orders").post(verifyUserJwt, placedUserOrder);
router
  .route("/order/:id/start-date")
  .put(verifyUserJwt, updateUserMonthlyOrderStartDate);
router.route("/order/:id").delete(verifyUserJwt, deleteUserOrder);

export default router;
