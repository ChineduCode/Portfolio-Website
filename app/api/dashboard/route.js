import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export async function GET(){
    const cookieStore = cookies()
    const token = cookieStore.get('MyCookie')
    console.log(token)
    return new Response(token, {status: 200});
}