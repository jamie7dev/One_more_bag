import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from "../../shared/api";

export const __getCart = createAsyncThunk(
    'detail/__getDetailInfo',
    async (payload, thunkAPI) => {
      try {
        const data = await instance.get(`api/member/cart`);
        console.log(data);
        return thunkAPI.fulfillWithValue(data.data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const cart = createSlice({
    name:"cart", 
    initialState:{
        cart:[],
        success: false,
        error: null,
        isLoading: false,
    },
    reducers: {},
    
    extraReducers: (builder) => {
    
        builder  
        .addCase(__getCart.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(__getCart.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.cart = action.payload;
        })
        .addCase(__getCart.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });

    },
    });
    
    export default cart.reducer;