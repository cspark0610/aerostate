// import {createReducer , createAction} from '@reduxjs/toolkit';

// //creando la accion
// export const setAirports = createAction("SET_AIRPORTS");

// //creado el reducer 
// export const airportsReducer = createReducer([],{
//     [setAirports] : (state, action) => action.payload,

// });


import { createSlice } from '@reduxjs/toolkit'

const airportsSlice = createSlice({
  name: 'SET_AIRPORTS',
  initialState : [],
  reducers: {
      setAirports : (state, action)=> action.payload
  }
})

export const { setAirports } = airportsSlice.actions
export default airportsSlice.reducer