export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  // IMPORTANT: Tell BetterAuth where the app is running
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
  // Add this section to handle production cookie security
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production"
  }
});