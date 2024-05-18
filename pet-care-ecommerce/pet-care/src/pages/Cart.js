import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, saveOrder } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    saveOrder();
    alert('Order placed successfully!');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${getTotalPrice()}</h2>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

