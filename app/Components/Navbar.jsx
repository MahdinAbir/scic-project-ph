// app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "../AuthActions/action";


export default function Navbar({ user }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left */}
            <Link href="/" className="text-2xl font-bold tracking-wide hover:opacity-90">
              Ever Cart
            </Link>

            {/* Middle (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink section="home" router={router} pathname={pathname}>Home</NavLink>
              <NavLink section="about" router={router} pathname={pathname}>About</NavLink>
              <NavLink section="products" router={router} pathname={pathname}>Products</NavLink>
              <NavLink section="contact" router={router} pathname={pathname}>Contact</NavLink>
              {user && (
    <Link href="/addApp" className="relative font-medium group">
      <span className="hover:opacity-90 transition">Add Product</span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </Link>
  )}
              
            </div>

            {/* Right (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
                    {user.name ?? "User"}
                  </span>
                  <form action={logout}>
                    <button className="rounded-xl bg-red-500/90 px-4 py-2 text-sm font-semibold hover:bg-red-500 active:scale-[.98] transition">
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/login"
                  className="rounded-xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold hover:bg-emerald-500 active:scale-[.98] transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer rounded-xl p-2 hover:bg-white/10 transition flex items-center">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>

              <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white text-gray-800 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                <div className="p-3 flex flex-col gap-1">
                  <MobileLink section="home" router={router} pathname={pathname}>Home</MobileLink>
                  <MobileLink section="about" router={router} pathname={pathname}>About</MobileLink>
                  <MobileLink section="products" router={router} pathname={pathname}>Products</MobileLink>
                  <MobileLink section="contact" router={router} pathname={pathname}>Contact</MobileLink>

                  <div className="my-2 border-t" />
                  {user ? (
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate px-2 text-sm font-medium">{user.name ?? "User"}</span>
                      <form action={logout}>
                        <button className="rounded-xl bg-red-500/90 px-4 py-2 text-sm font-semibold hover:bg-red-500 active:scale-[.98] transition">
                          Logout
                        </button>
                      </form>
                    </div>
                  ) : (
                    <Link
                      href="/login"
                      className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition text-center"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ section, children, router, pathname }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (section === "home") return router.push("/");

    if (pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <a href={`/#${section}`} onClick={handleClick} className="relative font-medium group">
      <span className="hover:opacity-90 transition">{children}</span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </a>
  );
}

function MobileLink({ section, children, router, pathname }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (section === "home") return router.push("/");

    if (pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <a href={`/#${section}`} onClick={handleClick} className="rounded-xl px-4 py-2 hover:bg-gray-100 transition font-medium">
      {children}
    </a>
  );
}
