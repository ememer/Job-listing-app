import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "the-new-css-reset/css/reset.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobDetails from "./Routes/JobDetails";
import JobList from "./components/JobList";
import ErrorPage from "./components/Error";
import EmployerPanel from "./Routes/EmployerPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <JobList/> },
      {
        path: "job/:id",
        element: <JobDetails />,
      },
      {
        path: "employer-panel",
        element: <EmployerPanel />,
      },
    ],
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
