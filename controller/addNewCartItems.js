import {query} from "../database/index.js"


const addNewCartItems = async (req, res) => {
    // insert sql selct new item to cart
      try {
        console.log(req.body);
        const productId = req.body.productId;
        await query('INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2)', [
          productId,
          1,
        ]);
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
  };
  
  export default addNewCartItems;