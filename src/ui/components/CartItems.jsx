import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";

export default function CartItems() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //   const [loading, setLoading] = useState("Loading ....");

  const removeItem = (productId) => {
    console.log(`rj_ addToCart product -- ${productId}`);
    dispatch(remove(productId));
  };

  return (
    <div>
      {/* {JSON.stringify(products)} */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Your Cart 🛒
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* {loading ? (
              <div className="loading text-xl text-center">{loading}</div>
            ) : (
              ""
            )} */}
            {products.length == 0 ? (
              <h3 className="text-center font-bold text-xl">
                Cart is Empty 😢🤦‍♂️
              </h3>
            ) : (
              ""
            )}
            {products.map((product) => (
              // Is this the downside?
              <Product
                product={product}
                key={product.id}
                removeItem={removeItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Product({ product, removeItem }) {
  return (
    <div
      key={product.id}
      className="group relative min-h-64"
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        alt={"img"}
        src={product.image}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex flex-col justify-between items-center gap-2 min-h-20">
        <h3 className="text-sm text-gray-700">
          {/* <span aria-hidden="true" className="absolute inset-0" /> */}
          {product.title}
        </h3>
        <p className="text-sm font-medium text-gray-900">
          INR: {product.price}
        </p>
        <button
          className="rounded bg-slate-600 p-2 cursor-pointer"
          onClick={() => {
            console.log(
              `rj_ add to cart button clicked for product -- ${product}`
            );
            removeItem(product.id);
          }}
        >
          Remove from cart
        </button>
        {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
      </div>
    </div>
  );
}
