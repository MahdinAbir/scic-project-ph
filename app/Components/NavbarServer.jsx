// app/components/NavbarServer.jsx
export const dynamic = "force-dynamic";
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "@/auth";
import Navbar from "./Navbar"; // client component below

export default async function NavbarServer() {
  noStore(); // ensure no caching
  const session = await auth();
  const user = session?.user || null;
  return <Navbar user={user} />;
}
