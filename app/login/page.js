import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function LoginPage() {
  const session = await auth()

  // 🚀 If already logged in → redirect to home
  // if (session?.user) {
  //   redirect("/")
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-700">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
        
        {/* Welcome message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-gray-500 mb-8">
          Sign in to continue to{" "}
          <span className="font-semibold text-indigo-600">YourProject</span>
        </p>

        {/* Google illustration */}
        <div className="flex justify-center mb-8">
          <Image
            src="/google-logo.png" // place in /public
            alt="Google"
            width={120}
            height={120}
          />
        </div>

        {/* Google login button */}
        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: "/" }) // 👈 redirect home
          }}
        >
          <button
            className="w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-emerald-600 active:scale-[.98] transition"
          >
            <Image
              src="/google-icon.png" // place in /public
              alt="Google"
              width={24}
              height={24}
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  )
}
