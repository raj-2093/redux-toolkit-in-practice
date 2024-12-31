import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  console.log(`rj_ params.id - ${params.id}`);
  const location = useLocation();
  const product = useSelector((state) => state.products.data).filter(
    (product) => params.id == product.id
  )[0];
  //   console.log(`rj_ product.title - ${JSON.stringify(product)}`);
  return (
    <div className="product-details-wrapper">
      <div className="product-label">
        <h1 className="text-xl font-bold text-pretty">{product.title}</h1>
      </div>
    </div>
  );
}
