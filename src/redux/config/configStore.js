import { configureStore } from "@reduxjs/toolkit";
import list from '../modules/list';
import detail from '../modules/detail';
import members from '../modules/members';
import mypage from '../modules/mypage';
import cart from '../modules/cart';


const store = configureStore({
  reducer: {
    list,
    detail,
    members,
    mypage,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;