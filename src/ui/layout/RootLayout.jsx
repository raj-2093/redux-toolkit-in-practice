import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import BaseRoutes from "../../routes/BaseRoutes";
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";

export default function RootLayout() {
  const location = useLocation();
  return (
    <div>
      <div
        className="header-wrapper"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "9",
          boxShadow: "0 0 10px black",
        }}
      >
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
      </div>
      {location.pathname.includes("admin") ? <LeftNav /> : ""}
      <div
        className="content mt-3"
        style={{
          height: "calc(100vh - 107px)",
          overflow: "auto",
        }}
      >
        <BaseRoutes />
      </div>
    </div>
  );
}
