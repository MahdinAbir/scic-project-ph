import Image from "next/image";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb"; // Needed to query by MongoDB _id

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Connect to MongoDB and get the product
  const collection = await dbConnect("products");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p className="text-center py-10">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 border-4 border-amber-950 bg-[#D6A99D] p-10 mx-6 my-10">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-64 object-cover rounded-md"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-700 mb-3">{product.description}</p>
          <p className="text-lg font-semibold mb-1">Price: ${product.price}</p>
          <p className="mb-1">Brand: {product.brand}</p>
          <p className="mb-1">Weight: {product.weight}g</p>
          <p className="text-gray-700">Return Policy: {product.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
}
