import { configureStore } from "@reduxjs/toolkit";
import members from '../modules/members';


const store = configureStore({
  reducer: {
    members,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;