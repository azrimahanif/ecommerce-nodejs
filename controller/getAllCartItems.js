import { query } from "../database/index.js";

const getAllCartItems = async (req, res) => {
  // insert sql selct query then render product card

    try {
    const data = await query("SELECT * FROM cart_items");
    const lists = data.rows;
    const title = "Cart Item"
    res.render("pages/cart", { lists , title});
  } catch (error) {
    console.log(error);
  }
};

export default getAllCartItems;