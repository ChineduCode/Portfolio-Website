import { NextResponse } from "next/server";

export async function POST(request){
    const newBlog = await request.json()
    console.log(newBlog)
    
    return NextResponse.json({newBlog})
}