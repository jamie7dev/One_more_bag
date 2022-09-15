import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from "../../shared/api";


// export const _getPosts = createAsyncThunk(
//     'list/_getPosts',
//     async (payload, thunkAPI) => {
//       try {
//         const data = await instance.get(`api/post?page=${payload}`);
//         // console.log(data);
//         return thunkAPI.fulfillWithValue(data.data.data);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//     );
    
export const __sortAndCategory = createAsyncThunk(
  'list/__sortAndCategory',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://43.201.34.71:8080/api/sort_category?page=${payload.page}&cate_no=${payload.cateNo}&sort_method=${payload.sortNo}
      `);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __category = createAsyncThunk(
//   'list/__category',
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(`http://43.201.34.71:8080/api/post_category?page=${payload.page}&cate_no=${payload.num}`);
//       // console.log(data);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __sort = createAsyncThunk(
//   'list/__category',
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get(`http://43.201.34.71:8080/api/post_category?page=${payload.page}&cate_no=${payload.num}`);
//       // console.log(data);
//       return thunkAPI.fulfillWithValue(data.data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
    
        // builder  
        // .addCase(_getPosts.pending, (state) => {
        // state.isLoading = true; 
        // })
        // .addCase(_getPosts.fulfilled, (state, action) => {
        // state.isLoading = false; 
        // state.data = action.payload; 
        // })
        // .addCase(_getPosts.rejected, (state, action) => {
        // state.isLoading = false; 
        // state.error = action.payload; 
        // });

        builder  
        .addCase(__sortAndCategory.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(__sortAndCategory.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.data = action.payload; 
        })
        .addCase(__sortAndCategory.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });

        // builder  
        // .addCase(__category.pending, (state) => {
        // state.isLoading = true; 
        // })
        // .addCase(__category.fulfilled, (state, action) => {
        // state.isLoading = false; 
        // state.data = action.payload; 
        // })
        // .addCase(__category.rejected, (state, action) => {
        // state.isLoading = false; 
        // state.error = action.payload; 
        // });

        // builder  
        // .addCase(__category.pending, (state) => {
        // state.isLoading = true; 
        // })
        // .addCase(__category.fulfilled, (state, action) => {
        // state.isLoading = false; 
        // state.data = action.payload; 
        // })
        // .addCase(__category.rejected, (state, action) => {
        // state.isLoading = false; 
        // state.error = action.payload; 
        // });

    },
    });
    
    export default list.reducer;