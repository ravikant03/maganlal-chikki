import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
  if (!Array.isArray(state.cart)) return; 

     const existingItem = state.cart.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cart.find((el) => el.id === action.payload.id);

      if (item) {
       if( action.payload.type == "increment") item.quantity += 1;
        if(action.payload.type == "decrement" && item.quantity > 1) item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
