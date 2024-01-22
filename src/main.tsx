import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./routes/HomePage.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Search from "./routes/Search.tsx";
import Bookmark from "./routes/Bookmark.tsx";
import AccountPage from "./routes/AccountPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/account",
        element: <AccountPage />,
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
