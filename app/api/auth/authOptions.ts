import prisma from "@/lib/components/prismadb"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const authOption = {
  adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: {  },
            password: {  }
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
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
          console.log(token)
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