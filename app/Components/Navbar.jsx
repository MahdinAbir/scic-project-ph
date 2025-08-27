// app/components/Navbar.jsx
import Link from "next/link"
import { auth, signIn, signOut } from "@/auth"

export default async function Navbar() {
  const session = await auth()
  const user = session?.user

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Project name */}
            <Link href="/" className="text-2xl font-bold tracking-wide hover:opacity-90">
              YourProject
            </Link>

            {/* Middle: links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Right: auth (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
                    {user.name ?? "User"}
                  </span>
                  <form action={async () => { "use server"; await signOut() }}>
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

            {/* Mobile: hamburger + sheet (CSS-only, no client JS) */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer rounded-xl p-2 hover:bg-white/10 transition flex items-center">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>

              <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white text-gray-800 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                <div className="p-3 flex flex-col gap-1">
                  <MobileLink href="/">Home</MobileLink>
                  <MobileLink href="/about">About</MobileLink>
                  <MobileLink href="/products">Products</MobileLink>
                  <MobileLink href="/contact">Contact</MobileLink>

                  <div className="my-2 border-t" />
                  {user ? (
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate px-2 text-sm font-medium">{user.name ?? "User"}</span>
                      <form action={async () => { "use server"; await signOut() }}>
                        <button className="rounded-xl bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600 transition">
                          Logout
                        </button>
                      </form>
                    </div>
                  ) : (
                    <form action={async () => { "use server"; await signIn("google") }}>
                      <button className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition">
                        Login
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  )
}

/* — helpers — */
function NavLink({ href, children }) {
  return (
    <Link href={href} className="relative font-medium group">
      <span className="hover:opacity-90 transition">{children}</span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </Link>
  )
}

function MobileLink({ href, children }) {
  return (
    <Link href={href} className="rounded-xl px-4 py-2 hover:bg-gray-100 transition font-medium">
      {children}
    </Link>
  )
}
