export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-gray-100 h-screen flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to AnimeHub
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-300">
          Discover, explore, and track your favorite anime all in one place.
        </p>
        <a
          href="#anime-list"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Explore Anime
        </a>
      </div>
    </section>
  );
}
