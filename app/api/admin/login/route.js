import Admin from "@/Models/admin"
import connectDB from "@/lib/connectDB"
import bcrypt from 'bcryptjs'
import { generateToken, verifyToken } from "@/lib/auth"
import { serialize } from "cookie"

export async function POST(request){
    const res  = await request.json()
    const {username, password} = res
    
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
        
        //Generate token if all went well
        const token = generateToken(admin)
        const serialized = serialize('OutSiteJwt', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30
        })

        return new Response(admin, {
            status: 200,
            headers: {'Set-Cookie': serialized}
        })
        
    } catch (error) {
        throw new Error(error)
    }

}