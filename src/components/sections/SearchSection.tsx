import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchSection() {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 flex justify-center">
      <div className="w-full max-w-xl px-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search Anime..."
            className="w-full pl-10 p-4 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
