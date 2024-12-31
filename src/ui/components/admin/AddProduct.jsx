import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/productSlice";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [submitButtonText, setSubmitButtonText] = useState("Submit");

  const dispatch = useDispatch();

  function addProductAction(e) {
    e.preventDefault();
    setSubmitButtonText("Submitted ...");
    setTimeout(() => {
      setSubmitButtonText("Submit");
    }, 1000);
    product.category = "default";
    dispatch(addProduct(product));
  }

  return (
    <div className="add-product-form-wrapper flex flex-col justify-center items-center gap-5 bg-slate-400 rounded w-fit p-4">
      <div className="label">
        <h3 className="text-xl text-center">Add Product</h3>
      </div>
      <div className="form">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-3"
          onSubmit={addProductAction}
        >
          <input
            type="text"
            name="title"
            id="title"
            className="rounded p-1"
            placeholder="Enter Title"
            value={product.title}
            onChange={(e) => {
              setProduct({ ...product, title: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            name="price"
            id="price"
            className="rounded p-1"
            placeholder="Enter price"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            name="description"
            id="description"
            className="rounded p-1"
            placeholder="Enter description"
            value={product.description}
            onChange={(e) => {
              setProduct({ ...product, description: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            name="image"
            id="image"
            className="rounded p-1"
            placeholder="Enter image url"
            value={product.image}
            onChange={(e) => {
              setProduct({ ...product, image: e.currentTarget.value });
            }}
          />
          <input
            type="submit"
            value={submitButtonText}
            className="bg-slate-900 rounded-md text-white p-2 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
