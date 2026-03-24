import Link from "next/link";

export default function AnimeNavbar() {
  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <ul className="flex justify-center space-x-6 p-4">
        <li>
          <Link
            href="#hero"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#search"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="#anime-list"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Anime List
          </Link>
        </li>
        <li>
          <Link
            href="#top-anime"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Top Anime
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
