import { PrismaClient } from "@/generated/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const prisma=new PrismaClient()
export async function GET(req:NextRequest,{ params}:any){
    const {id}=params
    try {
        
        const clerk=await clerkClient()
        const user=await clerk.users.getUser(id)
        console.log(user);
        const tutor=await prisma.tutor.findFirst({
            where:{
            userId:id
            }
        })
        const userRes={
            username:user.username,
            email:user.emailAddresses[0].emailAddress,
            img:user.imageUrl,
            id:user.id
        }
        return NextResponse.json({user:userRes,tutor,success:true},{status:200})
        
    } catch (error) {
        return NextResponse.json({msg:"Error while getting user"},{status:500})
    }
}