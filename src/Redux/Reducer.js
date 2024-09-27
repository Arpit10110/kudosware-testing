import { createAction,createReducer } from "@reduxjs/toolkit";
const Profile=createAction('Profile')
const logout=createAction('logout')

export  const tinycloreducer=createReducer({
   User_id:localStorage.getItem("TinyCloShopyID")? localStorage.getItem("TinyCloShopyID") :"",
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
}) 