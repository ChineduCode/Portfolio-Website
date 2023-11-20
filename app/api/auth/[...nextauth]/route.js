import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Admin from "@/Models/admin"
import connectDB from "@/lib/connectDB"
import bcrypt from 'bcryptjs'

const handler = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {}
            },

            async authorize(credentials, req){
                const {username, password} = credentials

                if(!username || !password){
                    throw new Error('Please fill all fields')
                }
                try {
                    await connectDB()
            
                    const admin = await Admin.findOne({username})
                    //Check if the user does not exit
                    if(!admin){
                        //return new Response('Admin not found', {status: 404})
                        throw new Error('Admin not found')
                    }
            
                    //compare and check for the password
                    const validPassword = await bcrypt.compare(password, admin.password)
                    if(!validPassword){
                        //return new Response('Invalid password', {status: 401})
                        throw new Error('Invalid password')
                    }
            
                    return new Response(admin, {status: 200 })
                    
                } catch (error) {
                    console.log(error.message)
                }

                // try {
                    
                //     const user = {
                //         name: 'chineducode',
                //         email: 'chineducode@gmail.com',
                //         nickname: 'martino',
                //         password: '12345678'
                //     }

                //     if(username != user.name){
                //         throw new Error('User not found')
                //     }
                //     if(password != user.password){
                //         throw new Error('Wrong password')
                //     }
    
                //     if(user){
                //         return user
                //     }else{
                //         return null
                //     }
                    
                // } catch (error) {
                //     console.log(error.message)
                // }
            }
        })
    ],

    pages: {
        signIn: '/admin/login'
    }
})

export { handler as GET, handler as POST }