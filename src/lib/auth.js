import { betterAuth } from "better-auth"; // <-- CRITICAL: DO NOT MISS THIS
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("suncart");

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