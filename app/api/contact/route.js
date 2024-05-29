import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request){
    const res = await request.json()
    const {name, email, subject, message} = res
    
    try {
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
            from: `"${name}" <${email}>`,
            to: process.env.USER,
            subject: subject,
            text: `Am ${name}, ${message}. ${email}`,
        }
    
        //send mail and check for errors
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent: ' + info.response);
        return NextResponse.json({message: 'Message sent ssuccessfully'})
        
    } catch (error) {
        console.log(error.message)
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
    
} 
