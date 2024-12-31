import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../ui/pages/ProductListing";
import Cart from "../ui/pages/Cart";
import AdminDashboard from "../ui/pages/admin/AdminDashboard";
import ProductDetail from "../ui/pages/ProductDetail";
import Home from "../ui/pages/Home";

export default function BaseRoutes({ children }) {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin-panel" element={<AdminDashboard />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}
