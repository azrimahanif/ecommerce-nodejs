import { Router } from "express";
import getAllProducts from "../controller/getAllProducts.js";
import getAllCartItems from "../controller/getAllCartItems.js";
import {addNewProductForm, addNewProductPage} from "../controller/addNewProduct.js";
import addNewCartItems from "../controller/addNewCartItems.js";
import deleteCartItems from "../controller/deleteCartItem.js";

const appRoutes = Router();

appRoutes.get("/", getAllProducts);
appRoutes.get("/cart", getAllCartItems);
appRoutes.get("/addProduct", addNewProductPage);
appRoutes.post("/submit-product", addNewProductForm);
appRoutes.post("/add-cart", addNewCartItems);
appRoutes.post("/delete-cart-item/:id", deleteCartItems);


appRoutes.get("/*", (req, res) => {
  res.render("pages/page-404");
});
export default appRoutes;
