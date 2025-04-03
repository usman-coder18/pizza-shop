import { NextResponse } from "next/server"

export const GET = ()=>{
    return new NextResponse("helo", {status: 200})
}


export const POST = ()=>{
    return new NextResponse("helo", {status: 200})
}