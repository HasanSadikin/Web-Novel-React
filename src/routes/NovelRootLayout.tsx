import { Outlet } from "react-router-dom";
// import BottomNavigation from "../components/nav/BottomNavigation";
import Navbar from "../components/nav/Navbar";

const NovelRootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      {/* <BottomNavigation /> */}
    </>
  );
};

export default NovelRootLayout;
