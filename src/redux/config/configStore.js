import { configureStore } from "@reduxjs/toolkit";
import list from '../modules/list';
import members from '../modules/members';
import mypage from '../modules/mypage';


const store = configureStore({
  reducer: {
    list,
    members,
    mypage
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;