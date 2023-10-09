import { NextResponse } from "next/server"; 
import connectDB from "@/connectDB";
import Admin from "@/Models/admin";
import bcrypt from 'bcryptjs'

export async function POST(request){
    try {
        await connectDB()

        const res = await request.json()
        const {firstname, lastname, email, password} = res
    
        if(!firstname || !lastname || !email || !password){
            NextResponse.json({'msg': 'Please fill all fields'})
        }
        
        //Check if email already exist
        const adminExists = await Admin.findOne({email})
        if(adminExists){
            throw new Error('Admin with the email already exist')
        }
        
        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const admin = await Admin.create({
            firstname,
            lastname,
            email,
            password: hashedPassword
        })
        
        if(admin){
            NextResponse.json({msg: `Congratulations, You're now an Admin`})
        }else{
           throw new Error(`Admin not created`)
        }
        
    } catch (error) {
        throw new Error(error)
    }
}