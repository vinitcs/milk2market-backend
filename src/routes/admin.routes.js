import { Router } from "express";

const router = Router();

router.route("/auth/admin/register").post(registerAdmin);
router.route("/auth/admin/login").post(loginAdmin);

// admin profile secure routes
router.route("/admin/verify-token").post(verifyAdminJwt, verifyAdminJwtToken);
router.route("/admin/current").get(verifyAdminJwt, getCurrentAdmin);
router.route("/auth/admin/logout").post(verifyAdminJwt, logoutAdmin);

// product crud secure routes
router.route("/products").post(verifyAdminJwt, addProduct);
router.route("/product/:id/update").put(verifyAdminJwt, updateProduct);
router.route("/product/:id/delete").delete(verifyAdminJwt, deleteProduct);

//category secure route
router.route("/category").post(verifyAdminJwt, addCategory);
router.route("/category/:id/delete").delete(verifyAdminJwt, deleteCategory);


// admin orders status update secure routes
router.route("/orders").get(verifyAdminJwt, usersOrder);
router.route("/orders/:id/status").patch(verifyAdminJwt, userOrderStatus);

export default router;
