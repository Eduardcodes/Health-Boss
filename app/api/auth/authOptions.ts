import prisma from "@/lib/components/prismadb"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const authOption = {
  adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: {  },
            password: {  }
          },
          async authorize(credentials) {
            const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/login`, {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const userRes = await res.json()
            // If no error and we have user data, return it
            if (res.ok && userRes) {
              return userRes.user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
      ],
      callbacks: {
        // @ts-ignore
        async jwt({token, user}){
          return {...token, ...user}
       },
        // @ts-ignore
        async session({ session, token, user }) {
          const {firstName, lastName, email, birthday} = token
          return {...session, user: {
            firstName, lastName, email, birthday
          }};
        },
      },
      session: {
        strategy: 'jwt'
      },
      pages: {
        signIn: '/loginUser',
        newUser: '/createUser' 
      },
}

export default authOption;