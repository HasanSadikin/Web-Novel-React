import Avatar from "../ui/Avatar";
import { Link, useLocation } from "react-router-dom";

import { useUser } from "../../hooks/useUser";
import {
  NOVELS_ACCOUNT,
  NOVELS_BOOKMARKS,
  NOVELS_HOME,
  NOVELS_SEARCH,
} from "../../utils/routes";

const BottomNavigation = () => {
  const [, isAuthenticated] = useUser();

  const location = useLocation();

  return (
    <>
      <div className="btm-nav">
        <Link
          to={NOVELS_HOME}
          className={location.pathname === NOVELS_HOME ? "active" : ""}
        >
          <HomeNav />
        </Link>
        <Link
          to={NOVELS_SEARCH}
          className={
            location.pathname.startsWith(NOVELS_SEARCH) ? "active" : ""
          }
        >
          <SearchNav />
        </Link>
        <Link
          to={NOVELS_BOOKMARKS}
          className={
            location.pathname.startsWith(NOVELS_BOOKMARKS) ? "active" : ""
          }
        >
          <BookmarkNav />
        </Link>
        <Link
          to={NOVELS_ACCOUNT}
          className={
            location.pathname.startsWith(NOVELS_ACCOUNT) ? "active" : ""
          }
        >
          <Avatar isAuthenticated={isAuthenticated} />
        </Link>
      </div>
    </>
  );
};

export default BottomNavigation;

function HomeNav({}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      <span className="btm-nav-label">Home</span>
    </>
  );
}

function SearchNav({}) {
  return (
    <>
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
          d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <span className="btm-nav-label">Search</span>
    </>
  );
}

function BookmarkNav({}) {
  return (
    <>
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
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>

      <span className="btm-nav-label">Bookmark</span>
    </>
  );
}
