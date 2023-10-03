import { NextResponse } from "next/server";
import connectDB from "@/connectDB";
import Subscriber from "@/Models/subscriber";

//Post request
export async function POST(request){
    try {
        await connectDB()

        const res = await request.json()
        const {email} = res

        if(!email){
            return NextResponse.json({msg: 'Please add a valid email'})
        }

        //Check if subscriber already exist
        const subscriberExist = await Subscriber.findOne({email})
        if(subscriberExist){
            return NextResponse.json({msg: 'Email Already Exist'})
        }

        //Add subscriber
        const subscriber = await Subscriber.create({email})
        if(subscriber){
            return NextResponse.json(subscriber)
        }else{
            throw new Error('Not subscribed')
        }
        
    } catch (error) {
        console.log(error)
    }
}

//Get request
export async function GET(){
    try {
        const res = await Subscriber.find({}, {__v: 0})
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}