import React from "react";
import Products from "../components/Products";

export default function ProductListing() {
  return (
    <div className="product-listing">
      <h2 className="text-3xl font-bold text-center">Product Dashboard</h2>
      <hr />
      <Products />
    </div>
  );
}
