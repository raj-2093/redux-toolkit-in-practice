import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {
  const location = useLocation();
  const cartProducts = useSelector((state) => state.cart);
  return (
    <nav className="bg-yellow-200 p-2">
      <div className="header-wrapper flex justify-between">
        <div className="logo w-[20%]">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold">ReduxStore</h1>
          </Link>
        </div>
        <div className="links flex justify-between items-center w-[80%]">
          <div className="page-links flex items-center gap-3 justify-center">
            <Link to={"/products"} className="rounded bg-rose-400 p-2">
              Products
            </Link>
            <Link to={"/admin-panel"} className="rounded bg-rose-400 p-2">
              Admin Panel
            </Link>
          </div>
          <div className="profile-links">
            <Link
              to={location.pathname.includes("cart") ? "/" : "/cart"}
              className="bg-slate-600 text-white rounded p-3 block"
            >
              {location.pathname.includes("cart")
                ? "Back to store"
                : `My Bag (${cartProducts.length})`}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
