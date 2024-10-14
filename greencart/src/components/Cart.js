import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
