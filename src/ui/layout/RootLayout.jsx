import React from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "../../routes/BaseRoutes";
import TopNav from "../components/TopNav";

export default function RootLayout({ children }) {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "brown",
          backgroundColor: "bisque",
        }}
      >
        <marquee behavior="scroll" direction="right">
          This is a demo app for using redux-toolkit in practice
        </marquee>
      </h1>
      <TopNav />
      <div className="content">
        <BaseRoutes />
      </div>
    </div>
  );
}
