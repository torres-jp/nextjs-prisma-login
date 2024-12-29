import NextAuth from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      authorize(credentials, req) {
        return null
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
