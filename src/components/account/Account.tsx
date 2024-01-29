import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  onLogout: () => void;
}

const Account = ({ onLogout }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-11/12 gap-10 m-24 rounded-lg md:w-7/12 lg:w-5/12">
        <h1 className="text-2xl font-bold">Account</h1>
        <div className="avatar placeholder">
          <div className="w-24 rounded-full bg-neutral text-neutral-content">
            <span className="text-3xl">D</span>
          </div>
        </div>
        <h1 className="text-lg font-semibold">{user?.email}</h1>
        <button className="w-full btn btn-primary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
