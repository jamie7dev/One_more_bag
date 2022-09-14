import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from "../../shared/api";
import { setCookie } from "../../shared/cookie";
// import axios from 'axios'


export const _getMembersEmail = createAsyncThunk(
  'members/_getMembersEmail',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get('api/member/signup');
      // console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __memberLogin = createAsyncThunk(
  "members/__memberLogin",
  async (payload, thunkAPI) => {
    try {
      const data =  await instance.post("/api/member/login", payload);

      setCookie("isLogin", data.headers.authorization);
      setCookie("ACCESS_TOKEN", data.headers.authorization);
      setCookie("REFRESH_TOKEN", data.headers.refreshtoken); //체크
      localStorage.setItem("name", data.data.data.name);
      if (data.data.success === true) {
        alert('로그인 되었습니다.');
      }
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      alert('로그인에 실패했습니다. 다시 시도하십시오.')
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//카카오 로그인
export const kakaologin = createAsyncThunk(
  'members/kakaoLogin',
  async (code, thunkAPI) => {
      try {
          const res = await instance.get(`api/member/kakao?code=${code}`)   //백엔드로 인가코드 보내기
          
          localStorage.setItem('token', res.headers.authorization);
          localStorage.setItem('refreshToken', res.headers.refreshtoken);
          console.log(res);
          alert('로그인 되었습니다.');
          return thunkAPI.fulfillWithValue(res.data);                    
                    
        } catch (error) {
          console.log("카카오 로그인 실패")
          return thunkAPI.rejectWithValue(error);
      }
  }
);

  
export const members = createSlice({
name:"members", 
initialState:{
    membersEmail: [], //get요청
    data:[], //  로그인 post요청
    success: false,
    error: null,
    isLoading: false,
},
reducers: {
    // login: (state, action) => {
    // state.user = action.payload;
    // axios.post("http://3.36.71.186:8080/api/users/login", action.payload)
    // },
    // logout(state){
    // localStorage.removeItem('token1')
    // localStorage.removeItem('token2')
    // localStorage.removeItem('name')
    // }
},

extraReducers: (builder) => {

    builder  
    .addCase(_getMembersEmail.pending, (state) => {
    state.isLoading = true; 
    })
    .addCase(_getMembersEmail.fulfilled, (state, action) => {
    state.isLoading = false; 
    state.usersEmail = action.payload; 
    })
    .addCase(_getMembersEmail.rejected, (state, action) => {
    state.isLoading = false; 
    state.error = action.payload; 
    });
    
    
    builder  
    .addCase(__memberLogin.pending, (state) => {
    state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    })
    .addCase(__memberLogin.fulfilled, (state, action) => {
    state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    state.success = action.payload.success;
    })
    .addCase(__memberLogin.rejected, (state, action) => {
    state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    state.success = action.payload.success;
    // console.log(action.payload.success);
    // alert(action.payload.message);
    });

},
})

const actionCreators = {kakaologin};
export {actionCreators};

// export const { login, logout } = members.actions;
export default members.reducer;


// export const __memberSignup = createAsyncThunk(
//   "members/__memberSignup",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await instance.post("api/member/signup", payload);
//       console.log(data);
//       alert('회원가입이 완료되었습니다. 로그인 후 이용바랍니다.');
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// builder  
// .addCase(__memberSignup.pending, (state) => {
// state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
// })
// .addCase(__memberSignup.fulfilled, (state, action) => {
// state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
// state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
// })
// .addCase(__memberSignup.rejected, (state, action) => {
// state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
// state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
// });