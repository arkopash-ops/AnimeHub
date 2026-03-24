import Link from "next/link";

export default function AnimeNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#hero">Home</Link>
        </li>
        <li>
          <Link href="#search">Search</Link>
        </li>
        <li>
          <Link href="#anime-list">Anime List</Link>
        </li>
        <li>
          <Link href="#top-anime">Top Anime</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
