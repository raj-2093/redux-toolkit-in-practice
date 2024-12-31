import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLeftNav } from "../../store/generalSlice";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const { isLeftNavOpen } = useSelector((state) => state.generals);
  const dispatch = useDispatch();
  console.log(`rj_ isLeftNavOpen - ${isLeftNavOpen}`);

  return (
    <div
      className="left-nav"
      style={{
        position: "fixed",
        top: "200px",
        left: "20px",
        zIndex: "99",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div className="toggle">
        <button
          className="text-pretty text-xl font-bold left-nav-toggle"
          style={{
            backgroundColor: "gray",
            borderRadius: "100px",
            padding: "10px",
          }}
          onClick={() => {
            dispatch(toggleLeftNav());
          }}
        >
          <img
            src="src\assets\menu-icon.png"
            style={{
              width: "20px",
              //   height: "50px",
            }}
            alt="toggle"
          />
        </button>
      </div>
      <div
        className="left-nav-wrapper h-[100%]"
        style={{
          position: "absolute",
          left: "30px",
          top: "30px",
          height: isLeftNavOpen ? "400px" : "30px",
          width: isLeftNavOpen ? "250px" : "30px",
          boxShadow: "3px 4px 10px black",
          // border: "1px solid black",
          backgroundColor: "gray",
          borderRadius: isLeftNavOpen ? "12px" : "50px",
          overflow: "hidden",
          // padding: "10px",
        }}
      >
        <div className="header">
          <h1 className="text-xl font-bold mt-5 text-center">Actions</h1>
        </div>
        <div className="body">
          <nav className="links">
            <ul>
              <li className="text-center">
                <Link to={"/"} className="underline">
                  Add more products
                </Link>
              </li>
              <li className="text-center">
                <Link to={"/"} className="underline">
                  Remove products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
