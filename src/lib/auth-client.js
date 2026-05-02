import { createAuthClient } from "better-auth/react"

const baseURL =
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
  process.env.BETTER_AUTH_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL,
})

export const { signIn, signUp, useSession } = authClient;