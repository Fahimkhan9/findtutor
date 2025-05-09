import { PrismaClient } from "@/generated/prisma";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";




const prisma = new PrismaClient()


export async function POST(req: NextRequest) {
    try {
        const { userId } = await getAuth(req)
        if (!userId) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }
        const {id}=await req.json()
        if(!id){
            return NextResponse.json({msg:"all fields are required"},{status:400})
        }
        const tuition=await prisma.tuition.findFirst({
            where:{
                id:Number(id)
            },
            include:{
                applications:true
            }
        })

        
        const client=await clerkClient()
        const users = (await client.users.getUserList({ userId: tuition?.postedById }))
   
        const res={
          user:{
            img:users.data[0].imageUrl,
            email:users.data[0].emailAddresses[0].emailAddress,
            username:users.data[0].username
          }
        }
        const tuitionwithuser={...tuition,...res}
  
        
          
        return NextResponse.json({tuition:tuitionwithuser,success:true}, { status: 200 })
        
        
       
    } catch (error: any) {
        console.log(error);
        
        return NextResponse.json({ msg: "Error creating tutor",success:false }, { status: 500 })
    }
}