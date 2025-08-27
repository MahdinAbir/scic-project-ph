import ProductsGrid from "./ProductGrid";


async function getProducts(page = 1, limit = 12) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ProductsPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 12;
  const data = await getProducts(page, limit);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <ProductsGrid initialData={data} limit={limit} />
    </div>
  );
}
