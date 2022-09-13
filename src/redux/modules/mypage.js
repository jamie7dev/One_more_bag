import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";
// import { setCookie } from "../../shared/cookie";

export const __getMypageInfo = createAsyncThunk(
    'mypage/__getMypageInfo',
    async (payload, thunkAPI) => {
      try {
        const data = await instance.get('api/member/mypage');
        return thunkAPI.fulfillWithValue(data.data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const __updateUserInfo = createAsyncThunk(
"mypage/__updateUserInfo",
async (payload, thunkAPI) => {
    try {
    console.log(payload);
    const data =  await instance.post("api/member/mypage", payload);
    console.log(data);
    if (data.data.success === true) {
    alert('회원정보가 수정되었습니다.');
    };
    return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
    return thunkAPI.rejectWithValue(error);
    }
}
);


  export const mypage = createSlice({
    name:"mypage", 
    initialState:{
        mypageInfo: {},
        success: false,
        error: null,
        isLoading: false,
    },

    reducers: {},
    
    extraReducers: (builder) => {
    
        builder  
        .addCase(__getMypageInfo.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(__getMypageInfo.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.mypageInfo = action.payload; 
        })
        .addCase(__getMypageInfo.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });

        builder  
        .addCase(__updateUserInfo.pending, (state) => {
        state.isLoading = true; 
        })
        .addCase(__updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.mypageInfo = action.payload; 
        })
        .addCase(__updateUserInfo.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; 
        });
        
    },
    });
    
    // export const { login, logout } = members.actions;
    export default mypage.reducer;