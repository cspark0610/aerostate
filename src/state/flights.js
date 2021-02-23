import {createReducer , createAction} from '@reduxjs/toolkit';

//creando la accion
export const setFlights = createAction("SET_FLIGHTS");

//creado el reducer 
export const flightsReducer = createReducer([],{
    [setFlights] : (state, action) => action.payload,

});

