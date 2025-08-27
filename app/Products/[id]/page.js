import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-64 h-64 object-cover rounded-md"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-700 mb-3">{product.description}</p>
          <p className="text-lg font-semibold mb-1">Price: ${product.price}</p>
          <p className="mb-1">Brand: {product.brand}</p>
          <p className="mb-1">Weight: {product.weight}g</p>
          <p className="text-gray-500">Return Policy: {product.returnPolicy}</p>
        </div>
      </div>
    </div>
  );
}
