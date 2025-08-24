import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


// Like below, but here thet finish all the promises until they do the next step
Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadProducts(() => { 
      resolve('value1');
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


/*
// promise --> run the function immediately
// resolve is similar to done
// promises help keeping the code flat, involving a lot of nesting
new Promise((resolve) => {
  loadProducts(() => { 
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/