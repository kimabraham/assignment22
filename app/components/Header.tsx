import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <nav className="navbar fixed h-16 bg-base-200 w-full z-50 max-w-screen min-w-full shadow-[0_0.5px_0px_0_rgba(166,173,187,1)]">
      <div className="min-w-80 max-w-screen-xl w-full mx-auto">
        <div className="flex-1">
          <Link href={ROUTES.HOME} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={ROUTES.ABOUT}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
