const cart = {
  cartItems: undefined,

  loadFromStorage() {
    // this = the outer object
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop'))
    || []
    },
  
  saveToStorage() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },
  
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
    },
  
  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId != productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    },
  
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
};

cart.loadFromStorage();

const businessCart = {
  cartItems: undefined,

  loadFromStorage() {
    // this = the outer object
    this.cartItems = JSON.parse(localStorage.getItem('cart-business'))
    || []
    },
  
  saveToStorage() {
    localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
    },
  
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
    },
  
  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId != productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
    },
  
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
};

businessCart.loadFromStorage();