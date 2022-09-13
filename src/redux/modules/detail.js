import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from "../../shared/api";

export const __getDetailInfo = createAsyncThunk(
    'detail/__getDetailInfo',
    async (payload, thunkAPI) => {
      try {
        const data = await axios.get(`http://43.201.34.71:8080/api/post/${payload}`);
        console.log(data.data);
        return thunkAPI.fulfillWithValue(data.data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const detail = createSlice({
    name:"detail", 
    initialState:{
        detailInfo:{},
        success: false,
        error: null,
        isLoading: false,
    },
    reducers: {},
    
    extraReducers: (builder) => {
    
        builder  
        .addCase(__getDetailInfo.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(__getDetailInfo.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.detailInfo = action.payload;
        })
        .addCase(__getDetailInfo.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });

    },
    });
    
    export default detail.reducer;