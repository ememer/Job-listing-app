import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "the-new-css-reset/css/reset.css";
import jobs from "./utils/data.json";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobDetails from "./Template/JobDetails";
import JobList from "./components/JobList";
import ErorrPage from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorrPage />,
    children: [
      { index: true, element: <JobList jobs={jobs} /> },
      {
        path: "job/:id",
        element: <JobDetails />,
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
