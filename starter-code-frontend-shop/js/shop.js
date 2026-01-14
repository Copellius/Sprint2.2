// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1

// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array

const buy = (id) => {
  for (const product of products) {
    if (product.id == id && product.quantity !== undefined) {
      product.quantity++;
    } else if (product.id == id) {
      product.quantity = 1;
      cart.push(product);
    }
  }
};

let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let id = event.target.dataset.productId;
    buy(id);
  });
});

// Exercise 2
const cleanCart = () => {
  cart.length = 0;
  console.log(cart);
};

const cleanButton = document.getElementById("clean-cart");

cleanButton.addEventListener("click", () => {
  cleanCart(cart);
});

// Exercise 3
const calculateTotal = () => {
  // Calculate total price of the cart using the "cartList" array
  let subtotal = 0;
  let totalPrice = 0;
  for (const product of cart) {
    subtotal = product.price * product.quantity;

    subtotal = applyPromotionsCart(product, subtotal);

    product.subtotal = subtotal;

    totalPrice += subtotal;
  }
  return totalPrice;
};

// Exercise 4
const applyPromotionsCart = (product, subtotal) => {
  // Apply promotions to each item in the array "cart"
  if (product.id == 1 && product.quantity >= 3) {
    subtotal = subtotal * 0.8;
  } else if (product.id == 3 && product.quantity >= 10) {
    subtotal = subtotal * 0.7;
  }
  return subtotal;
};

const cartButton = document.getElementsByClassName("cart-button");

for (const btn of cartButton) {
  btn.addEventListener("click", () => {
    console.log(calculateTotal());
    printCart(cart);
    console.log(cart);
  });
}

// Exercise 5
const cartList = document.getElementById("cart_list");

const printCart = (cart) => {
  // Fill the shopping cart modal manipulating the shopping cart dom

  for (const product of cart) {
    const item = document.createElement("tr");
    cartList.appendChild(item);

    const name = document.createElement("th");
    name.textContent = product.name;
    name.scope = "row";
    item.appendChild(name);

    const price = document.createElement("td");
    price.textContent = `$${product.price}`;
    item.appendChild(price);

    const quantity = document.createElement("td");
    quantity.textContent = product.quantity;
    item.appendChild(quantity);

    const subtotal = document.createElement("td");
    subtotal.textContent = `$${product.subtotal.toFixed(2)}`;
    item.appendChild(subtotal);
  }

  const totalPrice = document.getElementById("total_price");

  totalPrice.textContent = calculateTotal().toFixed(2);
};

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {};

const open_modal = () => {
  printCart();
};
