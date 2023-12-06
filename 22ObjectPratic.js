/*
  - Objects in JavaScript are reference types.
  - When you assign an object to another variable, you are creating a reference, not a copy.
  - Modifying the object through one reference affects the other.

  let product = {
      Compnay: "Apple",
      Brand: "I-phone",
      Model: "13 Pro",
      Price: 12000,
      deliveryTime: "Same Day"
  };

  // Creating a reference to the 'product' object, not a copy
  let copyProduct = product;
  console.log(copyProduct);

  // Modifying 'copyProduct' also modifies 'product' because they reference the same object
  copyProduct.Price = 11;
  console.log(product); // Output: { Compnay: "Apple", Brand: "I-phone", Model: "13 Pro", Price: 11, deliveryTime: "Same Day" }
  console.log(copyProduct); // Output: { Compnay: "Apple", Brand: "I-phone", Model: "13 Pro", Price: 11, deliveryTime: "Same Day" }

  // Modifying 'product' also modifies 'copyProduct'
  product.Price = 120;
  console.log(copyProduct); // Output: { Compnay: "Apple", Brand: "I-phone", Model: "13 Pro", Price: 120, deliveryTime: "Same Day" }

  // Accessing a property using bracket notation
  console.log(product["deliveryTime"]); // Output: "Same Day"
*/

let obj = {
    message: "Good Job",
    statuss: "Complete",
};

// Destructuring assignment to extract values from 'obj'
let { message, statuss } = obj;
console.log(message); // Output: "Good Job"
console.log(statuss); // Output: "Complete"
