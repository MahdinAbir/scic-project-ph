// app/actions/authActions.js
"use server";

import { signOut } from "@/auth";

export async function logout() {
  await signOut();
}
