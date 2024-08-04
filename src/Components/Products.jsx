import React from "react";
import axios from "axios";

function Products() {
  return (
    <div className="bg-zinc-300 mx-auto h-screen pl-4 pt-4">
      <h1 className="text-2xl font-semibold ">Products</h1>
      <button className="px-3 py-1 bg-red-300 my-4 border-2 rounded-md border-black">
        Add Data{" "}
      </button>
      <hr />
    </div>
  );
}

export default Products;
