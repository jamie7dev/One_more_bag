import { configureStore } from "@reduxjs/toolkit";
import list from '../modules/list';
import members from '../modules/members';


const store = configureStore({
  reducer: {
    list,
    members,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;