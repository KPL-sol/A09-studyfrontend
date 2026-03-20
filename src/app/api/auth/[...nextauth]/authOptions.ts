import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import userLogIn from '@/libs/userLogIn'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
  if (!credentials) return null
  const user = await userLogIn(credentials.email, credentials.password)
  if (user && user.success) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      _id: user._id,
      role: user.role,
      token: user.token,
    }
  }
  return null
},
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = (user as any)._id
        token.role = (user as any).role
        token.token = (user as any).token
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user._id = token._id as string
        session.user.role = token.role as string
        session.user.token = token.token as string
      }
      return session
    },
  },
}