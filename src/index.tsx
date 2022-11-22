import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "the-new-css-reset/css/reset.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import JobDetails from "./Template/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "job/:id",
    element: <JobDetails />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
