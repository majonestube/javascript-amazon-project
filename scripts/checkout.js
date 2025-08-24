import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


// async makes a function return a promise
async function loadPage() {
  try {
    //throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';

      loadCart(() => {
        // reject('error3');

        resolve();
      });
    });

  } catch (error) {
    console.log(`Unexpected error: ${error.name}. Please try again later.`);
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
// Like below, but here thet finish all the promises until they do the next step
Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => { 
      resolve('value1');
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

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