import { FieldValues } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login, logout } from "../store/user/userSlice";
import Account from "../components/account/Account";
import LoginForm from "../components/account/LoginForm";

const AccountPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(data: FieldValues) {
    dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      {!user.isAuthenticated ? (
        <LoginForm onLogin={onSubmit} />
      ) : (
        <Account onLogout={handleLogout} />
      )}
    </>
  );
};

export default AccountPage;
