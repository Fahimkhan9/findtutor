import { PrismaClient } from '@/generated/prisma';
import { clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';


const prisma=new PrismaClient()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tutorId = searchParams.get('tutorId');

  if (!tutorId) {
    return NextResponse.json({ msg: 'Missing tutorId in query',success:false  }, { status: 400 });
  }

  try {
    const applications = await prisma.tuitionApplication.findMany({
      where: {
        tutorId: Number(tutorId),
      },
      include: {
        tuition: true, // Include tuition details if needed in dashboard
      },
    });
    const userIds = [
        ...new Set(applications.map((app) => app.tuition.postedById)),
      ];
      const clerk=await clerkClient()
      const users = await Promise.all(
        userIds.map(async (userId) => {
          try {
            const user = await clerk.users.getUser(userId);
            return { userId, user };
          } catch {
            return { userId, user: null }; // fallback if user not found
          }
        })
      );
      const userMap = Object.fromEntries(
        users.map(({ userId, user }) => [userId, user])
      );
  
      // Attach user info to each tuition
      const enrichedApplications = applications.map((app) =>{
       
        const res={
            imageUrl:userMap[app.tuition.postedById]?.imageUrl,
            username:userMap[app.tuition.postedById]?.username,
            email:userMap[app.tuition.postedById]?.emailAddresses[0].emailAddress
        }
        return {
            ...app,
            tuition: {
              ...app.tuition,
              postedBy: res|| null,
            },
          }
      });

    
    return NextResponse.json({
      count: enrichedApplications.length,
      applications:enrichedApplications,
      success:true
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { msg: 'Failed to fetch tuition applications',success:false },
      { status: 500 }
    );
  }
}
