import { createAction,createReducer } from "@reduxjs/toolkit";
const Profile=createAction('Profile')
const logout=createAction('logout')
const addtocart=createAction('addtocart')
const Calculate=createAction('Calculate')

export  const tinycloreducer=createReducer({
   User_id:localStorage.getItem("TinyCloShopyID")? localStorage.getItem("TinyCloShopyID") :"",
   Cart:localStorage.getItem("TinyClocart")? JSON.parse(localStorage.getItem("TinyClocart")):[],
   TotalPrice:localStorage.getItem("TinyCloTotalPrice")? localStorage.getItem("TinyCloTotalPrice"):0,
   Shipping:100,
   Total:localStorage.getItem("TinyCloTotal")? localStorage.getItem("TinyCloTotal"):0
  },
(builder)=>{
    builder.addCase(Profile,(state,action)=>{
      const value=action.payload; 
      state.User_id=value.id;
      localStorage.setItem("TinyCloShopyID",state.User_id);
    })

    builder.addCase(logout,(state)=>{
      state.User_id="";
      localStorage.setItem("TinyCloShopyID",state.User_id);
    })

    builder.addCase(addtocart,(state,action)=>{
      const newItem = action.payload;
      const existingItem = state.Cart.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.qty += newItem.qty;
      } else {
        state.Cart.push(newItem);
      }
      localStorage.setItem("TinyClocart", JSON.stringify(state.Cart))
    })
    builder.addCase(Calculate, (state) => {
      let totalPrice = 0;
      state.Cart.forEach(item => {
        totalPrice += item.price * item.qty;
      });
      state.TotalPrice = totalPrice;
      state.Total = parseInt(state.TotalPrice) + parseInt(state.Shipping); // Ensure Shipping is a number
      localStorage.setItem("TinyCloTotalPrice", state.TotalPrice);
      localStorage.setItem("TinyCloTotal", state.Total);
    });
}) 