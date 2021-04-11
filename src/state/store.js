// STORE CREATION
import logger from 'redux-logger';
import { configureStore } from "@reduxjs/toolkit";
import  airportsReducer  from './airports';
import { flightsReducer } from './flights';
import { userReducer } from './users';

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: { 
      airports: airportsReducer,
      user : userReducer,
      flights : flightsReducer 
    
    },

});


export default store;