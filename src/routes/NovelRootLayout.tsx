import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/nav/BottomNavigation";
import Navbar from "../components/nav/Navbar";

const NovelRootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default NovelRootLayout;
