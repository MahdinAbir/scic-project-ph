"use client";

export default function Pagination({ currentPage, total, limit, onPageChange }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex items-center justify-center mt-8 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
