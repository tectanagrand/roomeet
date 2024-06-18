import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
        subscription: { type: "object" },
      },
      async authorize(credentials, req) {
        const auth = await axios.post(`${process.env.APPURL}/user/login`, {
          username: credentials?.username,
          password: credentials?.password,
          subscription: credentials?.subscription,
        });
        if (auth.status === 200) {
          const user = auth.data.data;
          return user;
        } else {
          return {
            error: "Error",
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
