import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../ui/pages/ProductListing";
import Cart from "../ui/pages/Cart";

export default function BaseRoutes({ children }) {
  return (
    <Routes>
      <Route index element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
