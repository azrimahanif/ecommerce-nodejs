import { query } from "../database/index.js";

const productModel = async () => {
  try {
    //   write your own sql to insert products table
    await query(
      `CREATE TABLE IF NOT EXISTS product (
        id serial PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price float(9,2) NOT NULL,
        curency VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        stock int NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        )`

    );
    console.log("products table created");
  } catch (error) {
    console.log(error);
  }
};

export default productModel;
