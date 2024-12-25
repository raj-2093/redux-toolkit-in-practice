import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../apis/fakeRestApis";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { getProducts } from "../../store/productSlice";

export default function Products() {
  const dispatch = useDispatch();

  //   const [products, setProducts] = useState([]);

  //   const [loading, setLoading] = useState("Loading ....");
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // getAllProducts().then((productsData) => {
    //   setProducts(productsData);
    // });
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    console.log(`rj_ addToCart product -- ${product}`);
    dispatch(add(product));
  };

  if (status == "loading")
    return (
      <div
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="src\assets\BasicLoader.gif" alt="" />
          Loading ...
        </div>
      </div>
    );

  return (
    <div>
      {/* {JSON.stringify(products)} */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              // Is this the downside?
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Product({ product, addToCart }) {
  const [addToCartButtonText, setAddToCartButtonText] = useState("Add to cart");
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
            addToCart(product);
            setAddToCartButtonText("Added ...");
            setTimeout(() => {
              setAddToCartButtonText("Add to cart");
            }, 2000);
          }}
        >
          {addToCartButtonText}
        </button>
        {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
      </div>
    </div>
  );
}
