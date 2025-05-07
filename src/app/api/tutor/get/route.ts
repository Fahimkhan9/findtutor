import { PrismaClient } from "@/generated/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";



const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    try {
        const { userId } = await getAuth(req)
        if (!userId) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }
        const tutor=await prisma.tutor.findFirst({
            where:{
                userId:userId
            }
        })
        return NextResponse.json({tutor,success:true}, { status: 200 })
        
        
       
    } catch (error: any) {
        console.log(error);
        
        return NextResponse.json({ msg: "Error creating tutor",success:false }, { status: 500 })
    }
}