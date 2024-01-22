import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/nav/BottomNavigation";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default RootLayout;
