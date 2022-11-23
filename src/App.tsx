import React from "react";
import "./App.css";
import { Outlet} from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet/>
      </Layout>
    </div>
  );
}

export default App;
