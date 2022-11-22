import React from "react";
import "./Layout.css"

type Layout = { children: JSX.Element };
export const Layout = ({ children }: Layout) => {
  return (
    <>
      <header></header>
      <main className="container">{children};</main>
    </>
  );
};
