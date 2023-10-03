import { NextResponse } from "next/server";
import portfolios from '../../../portfolio.json'

export async function GET(){
    try {
        return await NextResponse.json(portfolios)
    } catch (error) {
        console.log(error)
        NextResponse.json(error)
    }
}