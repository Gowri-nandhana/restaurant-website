import { configureStore, createSlice } from "@reduxjs/toolkit";

let mealSlice = createSlice({
    name : "meals",
    initialState:{
        value : [],
    },

    reducers:{
        setMealDetails:(state,action)=>{
            state.value=action.payload;
        },
    },
});


let cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [], // Clearer key name for cart items
      count: 0,  // Total count of items in the cart
    },
    reducers: {
      addToCart: (state, action) => {
        state.items.push(action.payload); // Add item to the cart
        state.count += 1; // Increment the cart count
      },
    },
  });
  
  // Export actions
  export let { setMealDetails } = mealSlice.actions;
  export let { addToCart } = cartSlice.actions;
  
  // Configure the Redux store
  export let reduxStore = configureStore({
    reducer: {
      meals: mealSlice.reducer, // Meals reducer
      cart: cartSlice.reducer,  // Cart reducer
    },
  });
  