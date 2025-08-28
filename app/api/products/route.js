import dbConnect from "@/lib/dbConnect";

export async function GET(request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = parseInt(url.searchParams.get("limit")) || 12;
  const skip = (page - 1) * limit;

  try {
    const collection = await dbConnect("products");
    const total = await collection.countDocuments();
    const products = await collection.find({}).skip(skip).limit(limit).toArray();

    return new Response(
      JSON.stringify({ products, total }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
