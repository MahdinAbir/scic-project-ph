export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="animate-pulse border rounded-lg p-4">
          <div className="bg-gray-300 h-48 w-full rounded mb-3"></div>
          <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
          <div className="bg-gray-300 h-4 w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
