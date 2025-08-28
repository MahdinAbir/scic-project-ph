"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    price: "",
    brand: "",
    weight: "",
    returnPolicy: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only required fields are filled, rest empty/default
    const product = {
      id: Date.now(), // just to generate a unique ID
      title: formData.title,
      description: formData.description,
      category: formData.category || "",
      price: parseFloat(formData.price) || 0,
      brand: formData.brand,
      weight: parseFloat(formData.weight) || 0,
      returnPolicy: formData.returnPolicy,

      // optional/empty fields
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      tags: [],
      sku: "",
      dimensions: { width: 0, height: 0, depth: 0 },
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      reviews: [],
      minimumOrderQuantity: 0,
      meta: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        barcode: "",
        qrCode: "",
      },
      images: formData.thumbnail ? [formData.thumbnail] : [],
      thumbnail: formData.thumbnail,
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Product added successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({
        title: "",
        description: "",
        thumbnail: "",
        price: "",
        brand: "",
        weight: "",
        returnPolicy: "",
        category: "",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while adding product",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-black bg-amber-50 shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "title", label: "Title" },
          { name: "description", label: "Description" },
          { name: "thumbnail", label: "Thumbnail Image Link" },
          { name: "price", label: "Price" },
          { name: "brand", label: "Brand" },
          { name: "weight", label: "Weight" },
          { name: "returnPolicy", label: "Return Policy" },
          { name: "category", label: "Category" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block capitalize font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required={["title", "description", "thumbnail", "price"].includes(name)}
              className="w-full border rounded-lg p-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
