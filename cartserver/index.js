// importing express fw
const express = require("express");

// creating server app
const app = express();


// to parse json to js
app.use(express.json());

// importing cors
const cors=require("cors")
app.use(cors({
  origin:"http://localhost:4200"
 }))








// POST endpoint for calculating the order details
app.post('/calculateOrder', (req, res) => {
  const products = req.body.products;

  let totalQuantity = 0;
  let cartTotal = 0;
  let maxDiscountAmount = 0;
  let discountName = '';
  let shippingPackages = 0;
  let giftWrapFee = 0;

  // Calculate the cart total and total quantity
  products.forEach((product) => {
    cartTotal += product.price * product.quantity;
    totalQuantity += product.quantity;
  });

  // Apply discount rules
  if (cartTotal > 200) {
    maxDiscountAmount = 10;
    discountName = 'flat_10_discount';
  }

  for (const product of products) {
    if (product.quantity > 10) {
      const discount = (product.price * product.quantity * 5) / 100;
      if (discount > maxDiscountAmount) {
        maxDiscountAmount = discount;
        discountName = 'bulk_5_discount';
      }
    }
  }

  if (totalQuantity > 20) {
    const discount = (cartTotal * 10) / 100;
    if (discount > maxDiscountAmount) {
      maxDiscountAmount = discount;
      discountName = 'bulk_10_discount';
    }
  }

  if (totalQuantity > 30) {
    for (const product of products) {
      if (product.quantity > 15) {
        const discount = ((product.quantity - 15) * product.price * 50) / 100;
        if (discount > maxDiscountAmount) {
          maxDiscountAmount = discount;
          discountName = 'tiered_50_discount';
        }
      }
    }
  }

  // Calculate shipping fee and gift wrap fee
  shippingPackages = Math.ceil(totalQuantity / 10);
  giftWrapFee = totalQuantity;

  // Calculate the total
  const subtotal = cartTotal - maxDiscountAmount;
  const shippingFee = shippingPackages * 5;
  const total = subtotal + shippingFee + giftWrapFee;

  // Prepare the response data
  const orderDetails = {
    cartTotal,
    discountName,
    discountAmount: maxDiscountAmount,
    shippingFee,
    giftWrapFee,
    total,
  };

  // Send the response
  res.json(orderDetails);
});








  1// configuring port number for server app
  app.listen(3000, () => {
    console.log("server running on port 3000");
  });
  