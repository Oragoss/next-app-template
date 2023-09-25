import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// //The ! tells the typescript compiler that we def have assigned a variable here and chill out
//Docs: https://next-auth.js.org/configuration/initialization#route-handlers-app
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }