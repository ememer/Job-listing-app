import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function Root() {
  return (
    <div className="App">
      <Layout>
        <Outlet/>
      </Layout>
    </div>
  );
}

export default Root;
