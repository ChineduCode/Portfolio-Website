import portfolios from '../../../../portfolio.json'
import { NextResponse } from 'next/server'

export async function GET(request){
    const {searchParams} = new URL(request.url)
    const stack = searchParams.get('stack')
    if(stack === 'all'){
        return NextResponse.json(portfolios)
    }
    const filteredPortfolio = await portfolios.filter(portfolio => portfolio.stack.toLowerCase() === stack.toLowerCase())
    return NextResponse.json(filteredPortfolio)
}