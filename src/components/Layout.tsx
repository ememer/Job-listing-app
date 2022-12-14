import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header></header>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout