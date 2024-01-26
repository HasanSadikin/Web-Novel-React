import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import novelSlice from "./novel/novelSlice";
import chapterSlice from "./chapter/chapterSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    novels: novelSlice,
    chapters: chapterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
