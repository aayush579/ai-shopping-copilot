import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className="text-gray-900 dark:text-gray-100 hover:underline">
          Home
        </Link>
        <Link href="/login" className="text-gray-900 dark:text-gray-100 hover:underline">
          Sign In
        </Link>
        <Link href="/register" className="text-gray-900 dark:text-gray-100 hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
