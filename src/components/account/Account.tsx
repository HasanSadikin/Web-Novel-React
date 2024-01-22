import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  onLogout: () => void;
}

const Account = ({ onLogout }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 h-screen">
        <h2 className="card-title justify-center pb-5">Account</h2>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-24">
            <span className="text-3xl">HS</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">{user?.email}</h1>
          <button className="btn btn-primary w-full" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
