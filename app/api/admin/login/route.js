import { NextResponse } from "next/server"
import sendingMail from "@/nodemailer"

export async function POST(request){
    const res  = await request.json()
    await sendingMail()
    return NextResponse.json({res})
}