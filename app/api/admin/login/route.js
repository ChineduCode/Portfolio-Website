import Admin from "@/Models/admin"
import connectDB from "@/lib/connectDB"
import bcrypt from 'bcryptjs'

export async function POST(request){
    const res  = await request.json()
    const {username, password} = res
    
    if(!username || !password){
        return new Response('Fill all fields', {
            status: 400
        })
    }

    try {
        await connectDB()

        const admin = await Admin.findOne({username})
        //Check for the username and also compare the password
        if(admin && (await bcrypt.compare(password, admin.password))){
            return new Response(admin, {
                status: 200
            })
        }else{
            return new Response('Invalid credentials', {
                status: 401
            })
        }
        
    } catch (error) {
        console.error(error)
    }

}