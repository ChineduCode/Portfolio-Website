import { NextResponse } from "next/server"; 
import connectDB from "@/connectDB";
import Admin from "@/Models/admin";
import bcrypt from 'bcryptjs'

export async function POST(request){
    try {
        const res = await request.json()
        const {firstname, lastname, email, password} = res
    
        if(!firstname || !lastname || !password){
            alert('Please fill all fields')
            return
        }
    
        await connectDB()
    
        const adminExists = await Admin.findOne({email})
        if(adminExists){
            console.log('Admin already exist, please login')
            return
        }
        
        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const admin = new Admin({
            firstname,
            lastname,
            email,
            password: hashedPassword
        })

        console.log(admin)
        await admin.save()
        return NextResponse.json({admin})
        
    } catch (error) {
        throw new Error(error)
    }
}