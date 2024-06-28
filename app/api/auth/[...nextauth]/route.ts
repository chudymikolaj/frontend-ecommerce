import NextAuth, { type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@lib/services/authService";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				identifier: { label: "Identifier", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const res = await login(String(credentials?.identifier), String(credentials?.password));

					console.log(res);

					const user = res.user;

					if (user) {
						return user;
					} else {
						return null;
					}
				} catch (error) {
					throw new Error("Invalid credentials");
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			if (token.user) {
				session.user = token.user as User;
			}

			return session;
		},
	},
	pages: {
		signIn: "/login",
		error: "/login",
	},
});

export { handler as GET, handler as POST };
