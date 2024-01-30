import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  DASHBOARD,
  DASHBOARD_CREATE_NOVEL,
  DASHBOARD_NOVELS,
  HOME,
  NOVELS_ACCOUNT,
  NOVELS_ACCOUNT_SIGNIN,
  NOVELS_BOOKMARKS,
  NOVELS_HOME,
  NOVELS_NOVEL,
  NOVELS_SEARCH,
} from "./routes.ts";
import SignInPage from "./pages/SignInPage.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NovelLayout from "./layouts/NovelLayout.tsx";
import NovelRootLayout from "./layouts/NovelRootLayout.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import AccountPage from "./pages/AccountPage.tsx";
import Bookmark from "./pages/Bookmark.tsx";
import HomePage from "./pages/HomePage.tsx";
import NovelChapterPage from "./pages/NovelChapterPage.tsx";
import NovelHomePage from "./pages/NovelHomePage.tsx";
import NovelPage from "./pages/NovelPage.tsx";
import { store } from "./store/store.ts";
import SearchPage from "./pages/SearchPage.tsx";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <RootLayout />,
    children: [
      {
        path: HOME,
        element: <HomePage />,
      },
      {
        path: NOVELS_HOME,
        element: <NovelRootLayout />,
        children: [
          {
            path: NOVELS_HOME,
            element: <NovelHomePage />,
          },
          {
            path: NOVELS_SEARCH,
            element: <SearchPage />,
          },
          {
            path: NOVELS_BOOKMARKS,
            element: <Bookmark />,
          },
          {
            path: NOVELS_ACCOUNT,
            element: <AccountPage />,
          },
          {
            path: NOVELS_ACCOUNT_SIGNIN,
            element: <SignInPage />,
          },
          {
            path: NOVELS_NOVEL,
            element: <NovelLayout />,
            children: [
              {
                path: `${NOVELS_NOVEL}/:slug`,
                element: <NovelPage />,
              },
              {
                path: `${NOVELS_NOVEL}/:slug/:chapter_id`,
                element: <NovelChapterPage />,
              },
            ],
          },
        ],
      },
      {
        path: DASHBOARD,
        element: "",
        children: [
          {
            path: DASHBOARD_NOVELS,
            element: "",
          },
          {
            path: DASHBOARD_CREATE_NOVEL,
            element: "",
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
