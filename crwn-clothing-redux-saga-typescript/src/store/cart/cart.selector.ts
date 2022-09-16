import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";
const selectCartReducer = (state: RootState): CartState => state.cart;

//incredibly important to know as a React developer: you only want to start improving the performance of your code or optimizing your code once you see there is a performance bottleneck i.e. if you do not notice any slow down in your code, there is no reason to start optimizing ahead of time
// the reason for this is because optimizations have cost that is very important to know
// Optimization is not free there are trade-offs: Optimization takes not only developers' time but also computer processing and resourcing time

// good example: createSelector call has a cost on the memory and has cost on rendering time
// it stores output value in memory somewhere and to do that storage also takes time
// the reason we use it is we call cart state multiple times
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
