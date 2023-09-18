const addNewCartItems = async (req, res) => {
    // insert sql selct new item to cart
      try {
        const cart = req.body.cart;
        await query("INSERT INTO cart_items (product, quantity) VALUES ($1, $2);", [
          cart,
          false,
        ]);
        res.redirect("/");
      } catch (error) {
        console.log(error);
      }
  };
  
  export default addNewCartItem;