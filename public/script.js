console.log("hello world");

function clickCartButton() {
  location.replace("/cart");
}

function clickHomeButton() {
  location.replace("/");
}

function clickAddProductButton() {
  location.replace("/addProduct");
}

function addToCart(productId){
  console.log(productId);
}
