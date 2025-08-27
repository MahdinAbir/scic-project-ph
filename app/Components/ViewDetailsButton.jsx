"use client";
import { useRouter } from "next/navigation";

export default function ViewDetailsButton({ id }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Products/${id}`); // redirect to dynamic route
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 my-2 py-1 cursor-pointer bg-emerald-500 text-white rounded-lg hover:bg-emerald-700 transition"
    >
      View Details
    </button>
  );
}
