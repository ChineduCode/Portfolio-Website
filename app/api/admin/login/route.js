import Admin from "@/Models/admin"
import connectDB from "@/lib/connectDB"
import bcrypt from 'bcryptjs'

export async function POST(request){
    const admin  = await request.json()
    const {username, password} = admin
    
    if(!username || !password){
        return new Response('Fill all fields', {
            status: 401
        })
    }

    try {
        await connectDB()

        const admin = await Admin.findOne({username})
        //Check if the user does not exit
        if(!admin){
            return new Response('Admin not found', {status: 404})
        }

        //compare and check for the password
        const validPassword = await bcrypt.compare(password, admin.password)
        if(!validPassword){
            return new Response('Invalid password', {status: 401})
        }

        return new Response(admin, {status: 200 })
        
    } catch (error) {
        throw new Error(error)
    }

}