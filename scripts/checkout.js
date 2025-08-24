import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// promise --> run the function immediately
// resolve is similar to done
new Promise((resolve) => {
  loadProducts(() => { 
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/