export default function AnimeLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
      {Array.from({ length: 1 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded overflow-hidden shadow p-4"
        >
          <div className="w-full h-56 bg-gray-300 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}
