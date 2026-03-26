import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cart.Slice";
import wishlistReducer from "./features/wishlist/wishlist.Slice";
import sidebarReducer from "./features/sidebar/sidebar.Slice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    sidebar: sidebarReducer
  },
});