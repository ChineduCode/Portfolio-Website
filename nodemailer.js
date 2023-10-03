import nodemailer from 'nodemailer'

export default async function sendingMail(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_AUTH_USER,
            pass: process.env.NODEMAILER_AUTH_PASS
        }
    })

    const mailOptions = {
        from: process.env.NODEMAILER_AUTH_USER,
        to: 'chinedunnaemeka2@gmail.com',
        subject: 'Hello from ChineduCode',
        text: 'Hello to the world, you successfully sent email with nodemailer',
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ' + info.response);
        }
    })
}