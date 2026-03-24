export default function AnimeFooter() {
  return (
    <footer>
      <p>{new Date().getFullYear()} AnimeHub. All rights reserved.</p>
      <div className="mt-2">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Twitter
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
