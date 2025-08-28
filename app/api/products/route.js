import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

// GET products with pagination
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;
    const skip = (page - 1) * limit;

    const collection = await dbConnect("products");
    const total = await collection.countDocuments();
    const products = await collection
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({ products, total }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 500 }
    );
  }
}

// POST a new product
export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbConnect("products");

    const result = await collection.insertOne(body);

    return NextResponse.json(
      { message: "Product added successfully!", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding product", error: error.message },
      { status: 500 }
    );
  }
}
