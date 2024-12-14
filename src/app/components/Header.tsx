import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold sm:text-2xl">iwa-Media</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href={"/post"}
                className="hover:underline underline-offset-2"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href={"/category"}
                className="hover:underline underline-offset-2"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href={"/tags"}
                className="hover:underline underline-offset-2"
              >
                Tags
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
