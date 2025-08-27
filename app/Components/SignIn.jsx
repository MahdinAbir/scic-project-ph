
import {auth, signIn, signOut } from "@/auth"
 
export default async function SignIn() {

    const session = await auth();
    console.log(session)
    const user = session?.user

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Sign in with Google</button>
    </form>
  )
} 