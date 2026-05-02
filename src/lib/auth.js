export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  
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
  
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production"
  }
});