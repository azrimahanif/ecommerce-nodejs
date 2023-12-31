import { query } from "../database/index.js";

const getAllProducts = async (req, res) => {
  // insert sql selct query then render product card

    try {
    const data = await query("SELECT * FROM product");
    const cartItemsData = await query("SELECT COUNT(*) FROM cart_items")
    const lists = data.rows;
    console.log(lists);
    const totalCartItems = cartItemsData.rows[0].count;
    const title = "All Product";
    res.render("pages/index", { lists, title, totalCartItems});
  } catch (error) {
    console.log(error);
  }
};

export default getAllProducts;
