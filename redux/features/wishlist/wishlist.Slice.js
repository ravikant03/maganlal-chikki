import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistCart: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      if (!product || !product.id) return;

      const exists = state.wishlistCart.some((item) => item.id === product.id);

      if (!exists) {
        state.wishlistCart.push(product);
      }
    },

    removeFromWishlist: (state, action) => {
      const id = action.payload?.id;
      if (!id) return;

      state.wishlistCart = state.wishlistCart.filter((item) => item.id !== id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
