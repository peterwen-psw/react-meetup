import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { FavoritesContextProvider } from "./store/favorites-comtext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllMeetupsPage />,
      },
      {
        path: "new-meetup",
        element: <NewMeetupPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

root.render(
  <FavoritesContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </FavoritesContextProvider>
);
