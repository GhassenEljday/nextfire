import Link from "next/link";

export default function Navbar() {
  const user = null;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        {username && (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li class="active">
              <Link href="/about">About</Link>
            </li>
          </>
        )}
        {!username && (
          <li class="active">
            <Link href="/about">About</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
