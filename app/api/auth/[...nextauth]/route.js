import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',

            credentials: {
                username: {label: 'Username', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },
        })
    ]
})

export { handler as GET, handler as POST }