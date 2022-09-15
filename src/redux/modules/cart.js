import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from '../../shared/api';

export const __getCart = createAsyncThunk(
  'cart/__getCart',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`api/member/cart`);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteCartItem = createAsyncThunk(
  "cart/__deleteCartItem",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete('api/member/cart', payload);
      if ( data.data.success === true) {
        alert('선택된 항목들이 삭제되었습니다.');
        window.location.reload();
      }
      return console.log(data);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deleteAll = createAsyncThunk(
  "cart/__deleteAll",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete('api/member/cart/deleteAll', payload);
      if ( data.data.success === true) {
        alert('장바구니를 비웠습니다.');
        window.location.reload();
      }
      return console.log(data.data);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);



export const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    success: false,
    error: null,
    isLoading: false,
  },
  reducers: {
    changeCount(state,action){
      let index = state.cart.findIndex((cart)=> cart.id === action.payload.id)
      state.cart.splice(index,1,{...state.cart[index],cnt:action.payload.count})
    }
  },

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

      builder
      .addCase(__deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload.message);
      });

      builder
      .addCase(__deleteAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload.message);
      });

    
  },
});

export let {changeCount} = cart.actions;
export default cart.reducer;
