class Cart {
  cartItems = undefined;
  localStorageKey = undefined;

  loadFromStorage() {
    // this = the outer object
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey))
    || []
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId == cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
      }

      this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId != productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  }


   
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId == cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  } 
}

const cart = new Cart();
const businessCart = new Cart();

cart.localStorageKey = 'cart-oop';
businessCart.localStorageKey = 'cart-business'

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);