import React from "react";
import CartItems from "../components/CartItems";

export default function Cart() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Products in cart</h2>
      <CartItems />
    </div>
  );
}
