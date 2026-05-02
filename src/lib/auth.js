export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  // This tells BetterAuth to use the Vercel URL in production
  baseURL: process.env.BETTER_AUTH_URL, 
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
  // CRITICAL: This ensures cookies are handled correctly over HTTPS
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production"
  }
});