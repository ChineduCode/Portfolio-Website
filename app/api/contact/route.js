import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request){
    const res = await request.json()
    const {name, email, subject, message} = res
    
    //Transporter 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_AUTH_USER,
            pass: process.env.NODEMAILER_AUTH_PASS
        }
    })
    
    //Mail Options
    const mailOptions = {
        from: email,
        to: process.env.USER,
        subject: subject,
        text: `Am ${name}, ${message}. ${email}`,
    }

    //send mail and check for errors
    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ' + info.response);
        }
    })
    
    return NextResponse.json(res)
} 
