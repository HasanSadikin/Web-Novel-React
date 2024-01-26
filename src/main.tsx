import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Search from "./routes/Search.tsx";
import Bookmark from "./routes/Bookmark.tsx";
import AccountPage from "./routes/AccountPage.tsx";
import NovelPage from "./routes/NovelPage.tsx";
import NovelChapterPage from "./routes/NovelChapterPage.tsx";
import NovelLayout from "./routes/NovelLayout.tsx";
import NovelHomePage from "./routes/NovelHomePage.tsx";
import HomePage from "./routes/HomePage.tsx";
import NovelRootLayout from "./routes/NovelRootLayout.tsx";
import {
  HOME,
  NOVELS_ACCOUNT,
  NOVELS_BOOKMARKS,
  NOVELS_HOME,
  NOVELS_NOVEL,
  NOVELS_SEARCH,
} from "./utils/routes.ts";

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
            element: <Search />,
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
