import { Link } from "react-router-dom";
import GlowBorder from "../home/GlowBorder";
import {
  HOME,
  NOVELS_ACCOUNT,
  NOVELS_BOOKMARKS,
  NOVELS_HOME,
  NOVELS_SEARCH,
} from "../../routes";
import { useUser } from "../../hooks/useUser";

const Navbar = () => {
  const [, isAuthenticated] = useUser();
  return (
    <div className="fixed w-screen h-16 bg-base-100/85 top-0 left-0 z-[20] backdrop-blur poppins">
      <div className="flex items-center justify-between w-10/12 h-16 mx-auto lg:w-3/4">
        <h1 className="text-xl font-semibold">
          <Link to={HOME}>Web Novel</Link>
        </h1>
        <ul className="items-center hidden gap-5 md:flex">
          <li>
            <Link to={NOVELS_HOME}>Novels</Link>
          </li>
          <li>
            <Link to={NOVELS_SEARCH}>Search</Link>
          </li>
          <li>
            <Link to={NOVELS_BOOKMARKS}>Bookmarks</Link>
          </li>
          <li>
            <Link to={NOVELS_ACCOUNT}>
              {!isAuthenticated && (
                <GlowBorder className="rounded-lg">
                  <button className="w-24 btn-outline btn-sm btn btn-primary">
                    Login
                  </button>
                </GlowBorder>
              )}
              {isAuthenticated && "Account"}
            </Link>
          </li>
        </ul>
        <div className="drawer md:hidden w-fit">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="flex justify-end drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary btn-outline drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <h1 className="text-xl font-semibold">Web Novel</h1>
              </li>
              <li>
                <a>Novels</a>
              </li>
              <li>
                <a>Search</a>
              </li>
              <li>
                <a>Bookmarks</a>
              </li>
              <li>
                <button className="w-full">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
