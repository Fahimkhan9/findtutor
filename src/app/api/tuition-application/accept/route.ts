import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

const prisma=new PrismaClient()

export async function PATCH(req: NextRequest) {
  const { applicationId } = await req.json();

  if (!applicationId) {
    return NextResponse.json({ error: 'applicationId is required' }, { status: 400 });
  }

  try {
    // Get the application with tuitionId
    const currentApp = await prisma.tuitionApplication.findUnique({
      where: { id: applicationId },
      include: { tuition: true },
    });

    if (!currentApp) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    const { tuitionId } = currentApp;

    // Check if another application for the same tuition is already accepted
    const existingAccepted = await prisma.tuitionApplication.findFirst({
      where: {
        tuitionId,
        status: 'accepted',
      },
    });

    if (existingAccepted) {
      return NextResponse.json(
        { msg: 'Another application has already been accepted for this tuition.',success:false },
        { status: 409 }
      );
    }

    // Update the selected application to "accepted"
    const updatedApp = await prisma.tuitionApplication.update({
      where: { id: applicationId },
      data: { status: 'accepted' },
    });

    return NextResponse.json({updatedApp,success:true});
  } catch (error) {
    console.error('Accept error:', error);
    return NextResponse.json(
      { msg: 'Failed to accept application',success:false },
      { status: 500 }
    );
  }
}
