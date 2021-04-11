import {createReducer , createAction} from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from "antd";

export const setUser = createAction("SET_USER");



export const sendLoginRequest = createAsyncThunk("SEND_LOGIN_REQUEST",()=>{
    return axios.post("/api/login")
    .then(res => res.data)
    
});


export const addToFavorites = createAsyncThunk("ADD_TO_FAVORITE",(flightId, thunkAPI) =>{
    const {user} = thunkAPI.getState();

    if (!user._id) {
    return message.error(`To add a favorite you need to be logged in.`);
    }
  
    return axios
        .put(`/api/favorites?userId=${user._id}&flightId=${flightId}`)
        .then((res) => res.data)
        
});
   
export const removeFromFavorites = createAsyncThunk(
    "REMOVE_FROM_FAVORITES",
    (flightId, thunkAPI) => {
      const { user } = thunkAPI.getState();
      if (!user._id) throw new Error("You need to be logged in"); // this should be imposible
      return axios
        .delete(`/api/favorites?userId=${user._id}&flightId=${flightId}`)
        .then((res) => res.data);
    }
  );


export const userReducer = createReducer({ },{
    [setUser] : (state, action) => action.payload,
    [addToFavorites.fulfilled] : (state,action) => (action.payload),
    [sendLoginRequest.fulfilled]: (state, action) => (action.payload),
    [removeFromFavorites.fulfilled]: (state,action) => (action.payload)
});