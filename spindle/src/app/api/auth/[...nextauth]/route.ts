import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();

const uri = process.env.MONGO_URI


export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
        id : {label : "id", type : "text"}
      },

     async authorize (credentials, req) {
  if (typeof credentials !== "undefined") {
    const { id, name, password } = credentials;
    let user = null

    try{
      const client = await MongoClient.connect(uri || '')
      const companies =  client.db().collection('companies');
      const document = await companies.findOne({ name : name });

      if (!document) {
        throw new Error("No user found");
      }

      const isMatch =  await bcrypt.compare(password, document.password);
        if (!isMatch) {

          throw new Error("Invalid Password");
        }

      // Transform the document into a User object
      if (document) {
        user = {
          id: document._id.toString(), // Convert ObjectId to string
          name: document.name,
        };
      }
      else{
        throw new Error("No user found")
      }
    } catch (error) {
      throw new Error("Either the user does not exist or the password is incorrect");
    }

    return user;
  }
  return null; // Return null if credentials is undefined
}



    })
    
  ],
  session: { strategy: "jwt" },
  secret: "secret",
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.name = user.name;
            token.id = user.id;
                  return token;

        }

      return token;
    },
    async session({ session, token }) {
      if (token?.name) {
        session.user = { name: token.name};
        
      }
      return session;
    }
    
  }

}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }