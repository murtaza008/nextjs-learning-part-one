import Counter from "./components/Counter";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>This is my Home Page</h1>
      <Counter />
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
