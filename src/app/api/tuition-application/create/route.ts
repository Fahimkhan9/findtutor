import { PrismaClient } from '@/generated/prisma';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const { userId } = await getAuth(req)
    if (!userId) {
        return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
    }
    const { tuitionId, message } = await req.json();

    // Validate input
    if (!tuitionId) {
        return NextResponse.json({ error: 'Tutor ID and Tuition ID are required.' }, { status: 400 });
    }

    try {
        const tutor = await prisma.tutor.findFirst({
            where: {
                userId: userId
            }
        })
        const tutorId=tutor?.id
       
         if (!tutorId) {
            return NextResponse.json({ msg: 'Tutor ID is required.', success: false }, { status: 400 });
        }
        const existingApplication = await prisma.tuitionApplication.findUnique({
            where: {
                tuitionId_tutorId: {
                    tuitionId:Number(tuitionId),
                    tutorId:Number(tutorId),
                },
            },
        });

        if (existingApplication) {
            return NextResponse.json({ msg: 'You have already applied to this tuition.', success: false }, { status: 400 });
        }

       

        const newApplication = await prisma.tuitionApplication.create({
            data: {
                tuitionId: Number(tuitionId),
                tutorId: Number(tutorId),
                message: message || null, // If no message, set it as null
            },
        });

        return NextResponse.json({ newApplication, success: true }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: 'Something went wrong while creating the application.', success: false }, { status: 500 });
    }
}
