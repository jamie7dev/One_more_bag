import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";


export const _getPosts = createAsyncThunk(
    'list/_getPosts',
    async (payload, thunkAPI) => {
      try {
        const data = await instance.get(`api/post?page=${payload}`);
        console.log(data);
        return thunkAPI.fulfillWithValue(data.data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const list = createSlice({
    name:"list", 
    initialState:{
        data:[],
        success: false,
        error: null,
        isLoading: false,
    },
    reducers: {

    },
    
    extraReducers: (builder) => {
    
        builder  
        .addCase(_getPosts.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(_getPosts.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.data = action.payload; 
        })
        .addCase(_getPosts.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });

    },
    });
    
    export default list.reducer;