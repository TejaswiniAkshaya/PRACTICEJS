import React from 'react'
import { NextRequest, NextResponse } from "next/server"
import { feedbacks } from './data';
import { comment } from 'postcss';

export async function GET(request:NextRequest){
 const searchParams=request.nextUrl.searchParams;
 const query=searchParams.get("query")
 const filtered=query?feedbacks.filter(feedback=>feedback.name?.includes(query)):feedbacks
 console.log(filtered)
 return NextResponse.json(filtered)
}
export async function POST(request:Request) {
    const data:Feedback=await request.json()
    console.log('data: ',data);
    const {name,email,message}=data
    feedbacks.push(data);
  return NextResponse.json({name,email,message})
}
