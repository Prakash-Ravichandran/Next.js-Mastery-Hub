"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href={"/news"}
              className={path.startsWith("/news") ? "active" : "dummy"}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href={"/archive"}
              className={path.startsWith("/archive") ? "active" : "dummy"}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
