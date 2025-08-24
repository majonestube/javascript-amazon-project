function Cart(name) {
  const cart = {
    cartItems: undefined,

    loadFromStorage() {
      // this = the outer object
      this.cartItems = JSON.parse(localStorage.getItem(name))
      || []
      },
    
    saveToStorage() {
      localStorage.setItem(name, JSON.stringify(this.cartItems));
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

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('business');

cart.loadFromStorage();
businessCart.loadFromStorage();

