interface Props {
  onLogout: () => void;
}

const Account = ({ onLogout }: Props) => {
  return (
    <div className="">
      <div className="h-96"></div>
      <button className="btn btn-primary w-full" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Account;
