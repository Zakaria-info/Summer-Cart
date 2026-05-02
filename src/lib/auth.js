import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI or MONGO_URI environment variable.");
}

const client = new MongoClient(uri);
const db = client.db(process.env.MONGODB_DB || process.env.MONGO_DB || "summer-store");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
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
    useSecureCookies: process.env.NODE_ENV === "production",
  },
});