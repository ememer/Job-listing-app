import React from "react";
import "./Layout.css"

type Layout = { children: JSX.Element };

const Layout = ({ children }: Layout) => {
  return (
    <>
      <header></header>
      <main className="container">{children};</main>
    </>
  );
};

export default Layout