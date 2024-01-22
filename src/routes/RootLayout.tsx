import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default RootLayout;
