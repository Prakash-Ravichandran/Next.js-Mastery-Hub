"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <li>
      <Link href={href} className={path.startsWith(href) ? "active" : "dummy"}>
        {children}
      </Link>
    </li>
  );
}
