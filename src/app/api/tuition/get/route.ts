import { PrismaClient } from "@/generated/prisma";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { userId } = await getAuth(req);
    if (!userId) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const [tuitions, total] = await Promise.all([
      prisma.tuition.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.tuition.count(),
    ]);
    const clerk=await clerkClient()

    const userIds = [...new Set(tuitions.map((t) => t.postedById))];
    const users = (await clerk.users.getUserList({ userId: userIds })).data;
    const userMap = new Map(users.map((user) => [user.id, user]));

    const tuitionWithUser = tuitions.map((tuition) => {
      const finduser = userMap.get(tuition.postedById) || null;
      return {
        ...tuition,
        user: finduser
          ? {
              img: finduser.imageUrl,
              email: finduser.emailAddresses[0]?.emailAddress,
              username: finduser.username,
            }
          : null,
      };
    });

    return NextResponse.json({
      tuitions: tuitionWithUser,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Error fetching tuitions", success: false }, { status: 500 });
  }
}
