import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function TopNav() {
  const location = useLocation();
  const cartProducts = useSelector((state) => state.cart);
  return (
    <nav className="bg-yellow-200 p-2">
      <div className="header-wrapper flex justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold">Redux Store</h1>
        </div>
        <div className="links">
          <div className="page-links"></div>
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
