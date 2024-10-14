const initialState = {
    cart: [],
    totalItems: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const itemInCart = state.cart.find(item => item.id === action.payload.id);
        if (itemInCart) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            totalItems: state.totalItems + 1,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
            totalItems: state.totalItems + 1,
          };
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - 1,
        };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1,
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  