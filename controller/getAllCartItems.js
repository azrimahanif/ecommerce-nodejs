import { query } from "../database/index.js";

const getAllCartItems = async (req, res) => {
  // insert sql selct query then render product card

    try {
    const data = await query("SELECT cart_items.id, cart_items.quantity, product.name, product.description, product.price, product.currency, product.image_url FROM cart_items JOIN product ON cart_items.product_id = product.id");
    const lists = data.rows;
    console.log(lists);
    const title = "Cart Item";
    res.render("pages/cart", { lists , title});
  } catch (error) {
    console.log(error);
  }
};

export default getAllCartItems;