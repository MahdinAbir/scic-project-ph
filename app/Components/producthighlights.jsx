"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ViewDetailsButton from "./ViewDetailsButton";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-pink-400 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 w-full">
                
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 mt-18 ">
                <h3 className="text-lg  font-semibold text-pink-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-pink-600 font-bold mb-4">${product.price}</p>
                <ViewDetailsButton id={product.id} >
                
                              </ViewDetailsButton>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/Products"
            className="px-6 py-3 bg-pink-200 hover:bg-pink-300 text-pink-900 font-semibold rounded-full shadow-lg transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
