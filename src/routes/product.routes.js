import { Router } from "express";

const router = Router();

router.route("/products").get(productsList); // work for all product list and for popular products will get check by parameter popular === true
router.route("/categories").get(productCategoriesList);

export default router;
