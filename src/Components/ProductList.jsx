import React, { useState } from "react";
import axios from "axios";

function ProductList() {
  const [product, setProduct] = useState();

  const LoadData = async () => {
    const URL = "https://fakestoreapi.com/products";
    await axios
      .get(URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProduct(response.data);
        } else {
          console.log("Data format is not an array");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(product);
  return (
    <div className="w-full h-screen ">
      <button
        className="px-3 py-1 bg-red-300 my-4 border-2 rounded-md border-black"
        onClick={() => LoadData()}
      >
        Add Data
      </button>
      <div className="flex gap-10 flex-wrap justify-center bg-gray-300 py-3">
        {product &&
          product.map((item, index) => (
            <div
              key={index}
              className="w-60 h-96 bg-white rounded-md shadow-md p-6"
            >
              <div className="w-full h-56 bg-slate-900 rounded-md overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h2 className="text-xs leading-5 font-bold mt-4">{item.title}</h2>
              <hr />
              <h3 className="text-xl font-bold text-red-700">${item.price}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
