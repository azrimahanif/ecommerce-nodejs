const addNewProduct = async (req, res) => {
  // insert sql selct query then render product card
    try {
      const product = req.body.product;
      await query("INSERT INTO product (name, price, currency, description, stock, image_url) VALUES ($1, $2, $3, $4, $5, $6);", [
        product,
        false,
      ]);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
};

export default addNewProduct;
