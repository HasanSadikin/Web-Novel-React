import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  onLogout: () => void;
}

const Account = ({ onLogout }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-11/12 aspect-square rounded-lg flex flex-col items-center justify-center gap-10">
        <h1 className="font-bold text-2xl">Account</h1>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-24">
            <span className="text-3xl">D</span>
          </div>
        </div>
        <h1 className="font-semibold text-lg">{user?.email}</h1>
        <button className="btn btn-primary w-full" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
