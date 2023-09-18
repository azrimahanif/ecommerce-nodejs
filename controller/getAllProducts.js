import { query } from "../database/index.js";

const getAllProducts = async (req, res) => {
  // insert sql selct query then render product card

    try {
    const data = await query("SELECT * FROM product");
    const lists = data.rows;
    const title = "All Product"
    res.render("pages/index", { lists, title});
  } catch (error) {
    console.log(error);
  }
};

export default getAllProducts;
