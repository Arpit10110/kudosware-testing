import { createAction, createReducer } from "@reduxjs/toolkit";

const Profile = createAction('Profile');
const logout = createAction('logout');
const addtocart = createAction('addtocart');
const Calculate = createAction('Calculate');
const Increment = createAction('Increment');
const decrement = createAction('decrement');
const deleteitem = createAction('deleteitem');
const selectedAddress = createAction('selectedAddress');

export const tinycloreducer = createReducer({
  User_id: localStorage.getItem("TinyCloShopyID") ? localStorage.getItem("TinyCloShopyID") : "",
  Cart: localStorage.getItem("TinyClocart") ? JSON.parse(localStorage.getItem("TinyClocart")) : [],
  TotalPrice: localStorage.getItem("TinyCloTotalPrice") ? localStorage.getItem("TinyCloTotalPrice") : 0,
  Shipping: 100,
  Total: localStorage.getItem("TinyCloTotal") ? localStorage.getItem("TinyCloTotal") : 0,
  selectedaddressIndex:localStorage.getItem("TinyCloSA") ? JSON.parse(localStorage.getItem("TinyCloSA")) : {}


}, (builder) => {
  builder.addCase(Profile, (state, action) => {
    const value = action.payload;
    state.User_id = value.id;
    localStorage.setItem("TinyCloShopyID", state.User_id);
  });

  builder.addCase(logout, (state) => {
    state.User_id = "";
    localStorage.setItem("TinyCloShopyID", state.User_id);
  });

  builder.addCase(addtocart, (state, action) => {
    const newItem = action.payload;
    const existingItem = state.Cart.find(item => item.id === newItem.id);
    if (existingItem) {
      existingItem.qty += newItem.qty;
    } else {
      state.Cart.push(newItem);
    }
    localStorage.setItem("TinyClocart", JSON.stringify(state.Cart));
  });

  builder.addCase(Calculate, (state) => {
    let totalPrice = 0;
    state.Cart.forEach(item => {
      totalPrice += item.price * item.qty;
    });
    
    state.TotalPrice = totalPrice;
    
    if (state.Cart.length === 0) {
      // If cart is empty, no shipping cost
      state.Total = 0;
    } else {
      // Add shipping only if there are items in the cart
      state.Total = parseInt(state.TotalPrice) + parseInt(state.Shipping);
    }
    
    localStorage.setItem("TinyCloTotalPrice", state.TotalPrice);
    localStorage.setItem("TinyCloTotal", state.Total);
  });
  

  // Increment item quantity in the cart
  builder.addCase(Increment, (state, action) => {
    const itemId = action.payload; // Assuming payload contains the item's id
    const item = state.Cart.find(item => item.id === itemId);
    if (item) {
      item.qty += 1; // Increment the quantity
      localStorage.setItem("TinyClocart", JSON.stringify(state.Cart)); // Update localStorage
    }
  });

  // Decrement item quantity in the cart
  builder.addCase(decrement, (state, action) => {
    const itemId = action.payload; // Assuming payload contains the item's id
    const item = state.Cart.find(item => item.id === itemId);
    if (item && item.qty > 1) {
      item.qty -= 1; // Decrement the quantity
      localStorage.setItem("TinyClocart", JSON.stringify(state.Cart)); // Update localStorage
    }
  });

  // Delete item from the cart
  builder.addCase(deleteitem, (state, action) => {
    const itemId = action.payload; // Assuming payload contains the item's id
    state.Cart = state.Cart.filter(item => item.id !== itemId); // Remove item
    localStorage.setItem("TinyClocart", JSON.stringify(state.Cart)); // Update localStorage
  });

  builder.addCase(selectedAddress, (state, action) => {
    const value = action.payload; // Assuming payload contains the item's id
    state.selectedaddressIndex = value.load
    console.log(value.load); 
    localStorage.setItem("TinyCloSA", JSON.stringify(state.selectedaddressIndex ));
  });
});
