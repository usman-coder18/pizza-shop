import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token && session.user) {
        session.user.isAdmin = token.isAdmin ?? false;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }

      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });

      token.isAdmin = userInDb?.isAdmin ?? false;
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
