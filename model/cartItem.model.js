import { query } from "../database/index.js";

const cartItemModel = async () => {
  try {
    //   write your own sql to insert cart_items table
    await query(
      `CREATE TABLE IF NOT EXISTS cart_items (
        id serial PRIMARY KEY,
        product_id int NOT NULL,
        quantity int NOT NULL,);
        ADD CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product (id)`
    );
    console.log("cart_items table created");
  } catch (error) {
    console.log(error);
  }
};

export default cartItemModel;
