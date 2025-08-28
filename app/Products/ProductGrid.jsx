"use client";
import { useState, useEffect } from "react";
import Pagination from "./pagination";
import ViewDetailsButton from "../Components/ViewDetailsButton";

export default function ProductsGrid({ initialData, limit = 12 }) {
  const [products, setProducts] = useState(initialData.products);
  const [total, setTotal] = useState(initialData.total);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (page) => {
    setLoading(true);
    const res = await fetch(`/api/products?page=${page}&limit=${limit}`);
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProducts(page);
  };

  return (
    <div>
      {loading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="border mx-10 rounded-lg p-4 shadow hover:shadow-md transition text-black bg-fuchsia-100">
              <img src={product.thumbnail} alt={product.title} className="h-40 w-40 object-cover rounded-md mb-3" />
              <h2 className="font-semibold text-lg truncate">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              <ViewDetailsButton id={product._id} />
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        total={total}
        limit={limit}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
