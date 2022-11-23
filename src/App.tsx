import React from "react";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
