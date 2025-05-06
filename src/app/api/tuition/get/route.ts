import { PrismaClient } from "@/generated/prisma";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";



const prisma = new PrismaClient()


export async function GET(req: NextRequest) {
    try {
        const { userId } = await getAuth(req)
        if (!userId) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }
        const tuitions=await prisma.tuition.findMany()
        const userIds = [...new Set(tuitions.map(t => t.postedById))]
        const client=await clerkClient()
        const users = (await client.users.getUserList({ userId: userIds }))
        const userMap = new Map(users.data.map(user => [user.id, user]))

        const tuitionWithUser = tuitions.map(tuition => {
            const finduser=userMap.get(tuition.postedById)||null
            return {
                ...tuition,
                user: {
                    img:finduser?.imageUrl,
                    email:finduser?.emailAddresses[0].emailAddress,
                    username:finduser?.username
                },
              }
        })
          console.log(tuitionWithUser);
          
        return NextResponse.json({tuitions:tuitionWithUser,success:true}, { status: 200 })
        
        
       
    } catch (error: any) {
        console.log(error);
        
        return NextResponse.json({ msg: "Error creating tutor",success:false }, { status: 500 })
    }
}