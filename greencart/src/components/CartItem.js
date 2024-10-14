import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <div>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;
