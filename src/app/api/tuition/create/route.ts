import { PrismaClient } from "@/generated/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";




const prisma = new PrismaClient()
export async function POST(req: NextRequest) {
    try {
        const { userId } = await getAuth(req)
        if (!userId) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }
        
        const {
            location,
            district,
            mode,
            year,
            subjects,
            salary,
            description
        } = await req.json()
        console.log(location,
            district,
            mode,
            year,
            subjects,
            salary,
            description);
        
        if ([location,
            district,
            mode,
            year,
            subjects,
            salary,
            description].some(i => i.trim() === '')) {
            return NextResponse.json({ msg: "All fields are required", success: false }, { status: 400 })
        }
        const tuition = await prisma.tuition.create({
            data: {
                location:location.toString(),
            district:district.toString(),
            mode:mode.toString(),
            year:year.toString(),
            subjects:subjects.toString(),
            salary:salary.toString(),
            description:description.toString(),
            postedById:userId
            }
        })
        return NextResponse.json({msg:"Created tuition",tuition,success:true},{status:201})

    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: 'Error while creating', success: false }, { status: 500 })

    }
}