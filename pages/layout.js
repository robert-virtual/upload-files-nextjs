import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/cars">
          <a>Cars</a>
        </Link>
      </nav>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
