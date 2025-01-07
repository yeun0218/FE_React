import {createSlice} from '@reduxjs/toolkit';
import { useEffect } from 'react';

const ResourceSlice = createSlice({
    name:"resource",
    initialState:{
        products:[
            { id: 1, name: "마우스", price: 5000},
            { id: 2, name: "키보드", price: 50000},
            { id: 3, name: "모니터", price: 500000 },
        ],
        cart:[]
    },
    reducers:{
        ADD_TO_CART:(state, action)=>{
            state.cart.push({...action.payload, quantity:1});
        },
        UPDATE_QUANTITY:(state, action)=>{
            state.cart.forEach((data)=>{
                if(data.id === action.payload[0]){
                    data.quantity += action.payload[1];
                }
            });
        },
        REMOVE_FROM_CART:(state, action)=>{
            state.cart = state.cart.filter((data) => data.id !== action.payload);
        }
    }
});

export const {ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART} = ResourceSlice.actions;
export default ResourceSlice.reducer;