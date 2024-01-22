import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import novelSlice from "./novel/novelSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    novels: novelSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
