import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const district = searchParams.get('district') || undefined;
  const location = searchParams.get('location') || undefined;
  const year = searchParams.get('year') || undefined;
  const subject = searchParams.get('subject') || undefined;
  const salary = searchParams.get('salary') ? Number(searchParams.get('salary')) : undefined;

  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const skip = (page - 1) * limit;

  try {
    const [tuitions, total] = await Promise.all([
      prisma.tuition.findMany({
        where: {
          district: district ? { contains: district, mode: 'insensitive' } : undefined,
          location: location ? { contains: location, mode: 'insensitive' } : undefined,
          year: year ? { equals: year } : undefined,
          subjects: subject ? { contains: subject, mode: 'insensitive' } : undefined,
          salary: salary ? { gte: salary } : undefined,
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip,
      }),
      prisma.tuition.count({
        where: {
          district: district ? { contains: district, mode: 'insensitive' } : undefined,
          location: location ? { contains: location, mode: 'insensitive' } : undefined,
          year: year ? { equals: year } : undefined,
          subjects: subject ? { contains: subject, mode: 'insensitive' } : undefined,
          salary: salary ? { gte: salary } : undefined,
        },
      }),
    ]);

    // Get all unique userIds from the tuitions
    const userIds = Array.from(new Set(tuitions.map(t => t.postedById)));

    // Fetch user info from Clerk
    const clerk=await clerkClient()
    const users = await clerk.users.getUserList({ userId: userIds });

    // Create a map for quick lookup
    const userMap = Object.fromEntries(users.data.map(u => [u.id, u]));

    // Attach user info to each tuition
    const enrichedTuitions = tuitions.map(tuition => {
      const res={
        img:userMap[tuition.postedById].imageUrl,
        username:userMap[tuition.postedById].username,
        email:userMap[tuition.postedById].emailAddresses[0].emailAddress
      }
      return {
        ...tuition,
        user: res|| null,
      }
    });

    return NextResponse.json({
      tuitions: enrichedTuitions,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('[TUITION_SEARCH_ERROR]', error);
    return NextResponse.json({ error: 'Something went wrong while searching.' }, { status: 500 });
  }
}
