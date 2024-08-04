import React from "react";
import ProductList from "./ProductList";

function Products() {
  return (
    <div className=" mx-auto h-full pl-4 pt-4 bg-gray-300">
      <h1 className="text-2xl font-semibold ">Products</h1>

      <hr />
      <ProductList />
    </div>
  );
}

export default Products;
