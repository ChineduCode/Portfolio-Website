import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Admin from "@/Models/admin";
import bcrypt from 'bcryptjs'
import { generateToken } from "@/lib/auth";

export async function POST(request){

    const res = await request.json()
    const {username, email, password, confirmPassword} = res

    if(!username|| !email || !password){
        return NextResponse.json({'msg': 'Please fill all fields'})
    }

    if(password.length < 8){
        return NextResponse.json({msg: 'Password must be more than seven characters'})
    }

    if(confirmPassword !== password){
        return NextResponse.json({msg: `Passwords do not match`})
    }

    try {

        await connectDB()
        
        //Check if email already exist
        const adminExists = await Admin.findOne({email})
        if(adminExists){
            throw new Error('Admin with the email already exist')
        }
        
        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const admin = new Admin({
            username,
            email,
            password: hashedPassword
        })

        await admin.save()

        return NextResponse.json(admin)
        
    } catch (error) {
        throw new Error(error)
    }
}