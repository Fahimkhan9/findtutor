import { PrismaClient } from '@/generated/prisma';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { userId } = await getAuth(req);
    if (!userId) {
        return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { tuitionId, message } = await req.json();

        if (!tuitionId) {
            return NextResponse.json({ error: 'Tuition ID is required.' }, { status: 400 });
        }

        // Fetch tutor by Clerk user ID
        const tutor = await prisma.tutor.findFirst({
            where: { userId }
        });

        if (!tutor) {
            return NextResponse.json({ msg: 'Tutor profile not found.', success: false,code:"TUTOR_PROFILE_REQUIRED" }, { status: 404 });
        }

        const tutorId = tutor.id;

        // Optional: Prevent tutor from applying to their own post
        const tuition = await prisma.tuition.findUnique({
            where: { id: Number(tuitionId) },
        });

        if (!tuition) {
            return NextResponse.json({ msg: 'Tuition post not found.', success: false }, { status: 404 });
        }

        if (tuition.postedById === userId) {
            return NextResponse.json({ msg: 'You cannot apply to your own tuition post.', success: false }, { status: 403 });
        }

        // Check for existing application
        const existingApplication = await prisma.tuitionApplication.findUnique({
            where: {
                tuitionId_tutorId: {
                    tuitionId: Number(tuitionId),
                    tutorId: Number(tutorId),
                },
            },
        });

        if (existingApplication) {
            return NextResponse.json({
                msg: 'You have already applied to this tuition.',
                success: false,
            }, { status: 400 });
        }

        // Create new application
        const newApplication = await prisma.tuitionApplication.create({
            data: {
                tuitionId: Number(tuitionId),
                tutorId: Number(tutorId),
                message: message || null,
            },
        });

        return NextResponse.json({ newApplication, success: true }, { status: 201 });

    } catch (error) {
        console.error('[APPLICATION_ERROR]', error);
        return NextResponse.json({
            msg: 'Something went wrong while creating the application.',
            success: false,
        }, { status: 500 });
    }
}
