export default function AnimeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 px-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} AnimeHub. All rights reserved.
      </p>
      <div className="mt-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300"
        >
          Twitter
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300"
        >
          GitHub
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
