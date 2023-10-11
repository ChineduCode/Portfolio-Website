import { NextResponse } from "next/server"
import Admin from "@/Models/admin"
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
        const admin = await Admin.findOne({username})
    
        if(admin && (await bcrypt.compare(password, admin.password))){
            return NextResponse.json(admin)
        }else{
            return new Response('Invalid credentials', {
                status: 401
            })
        }
        
    } catch (error) {
        console.error(error)
    }

}