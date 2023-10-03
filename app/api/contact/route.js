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
        to: process.env.NODEMAILER_AUTH_USER,
        subject: subject,
        text: `Am ${name}, ${message}`,
    }

    //send mail and check for errors
    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ' + info.response);
        }
    })


    //send successful message to the client
    function successfulMsgToClient(){
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
            from: process.env.NODEMAILER_AUTH_USER,
            to: email,
            subject: subject,
            text: `
                Thanks for contacting ${process.env.NODEMAILER_AUTH_USER}. 
                We will get back to you within 24hrs. Always check your mail !!!
            `,
        }

        //send mail and check for errors
        transporter.sendMail(mailOptions, function(err, info) {
            if(err) {
                console.log(err)
            }else{
                console.log('Email sent: ' + info.response);
            }
        })
    }

    successfulMsgToClient()

    return NextResponse.json(res)
} 
