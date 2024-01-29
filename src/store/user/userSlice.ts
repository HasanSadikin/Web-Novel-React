import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSupabase } from "../../utils/supabase";
import { User } from "@supabase/supabase-js";

const supabase = useSupabase();

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<User | null>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        isAuthenticated.fulfilled,
        (state, action: PayloadAction<boolean>) => {
          state.isAuthenticated = action.payload;
        }
      )
      .addCase(login.fulfilled, (state, action: PayloadAction<User | null>) => {
        state.isAuthenticated = action.payload !== null;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true;
          state.user = action.payload;
        }
      });
  },
});

export const isAuthenticated = createAsyncThunk(
  "user/isAuthenticated",
  async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session != null;
  }
);

type Payload = {
  email: string;
  password: string;
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async (payload: Payload) => {
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (payload: Payload) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });

    if (error) {
      return null;
    } else {
      return data.user;
    }
  }
);

export const getUser = createAsyncThunk("user/getUser", async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

export const logout = createAsyncThunk("user/logout", async () => {
  await supabase.auth.signOut();
});

export default userSlice.reducer;
