import {query} from "../database/index.js"


export const addNewProductPage = async (req, res) => {
  try {
      res.render("pages/addProduct");
    } catch (error) {
      console.log(error);
    }
}

export const addNewProductForm = async (req, res) => {
  // insert sql selct query then render product card
    try {
      const name = req.body.name;
      const description = req.body.description;
      const price = req.body.price;
      const currency = req.body.currency;
      const image_url = req.body.image_url;
      const stock = req.body.stock;

      await query("INSERT INTO product (name, price, currency, description, stock, image_url) VALUES ($1, $2, $3, $4, $5, $6);", 
      [
        name,
        price,
        currency,
        description,
        stock,
        image_url
      ]);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
};

