import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-2">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className="font-semibold sm:text-2xl">
            iwa Media
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="hover:underline underline-offset-2">
                Posts
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
