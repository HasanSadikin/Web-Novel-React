import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getUser, isAuthenticated } from "../store/user/userSlice";
import { User } from "@supabase/supabase-js";

export function useUser(): [User | null, boolean] {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(isAuthenticated());
  }, []);

  useEffect(() => {
    if (user.isAuthenticated) dispatch(getUser());
  }, [user.isAuthenticated]);

  return [user.user, user.isAuthenticated];
}
