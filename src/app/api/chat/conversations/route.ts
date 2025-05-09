import { NextResponse } from "next/server";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function GET(req: Request) {
try {
  const { userId } = await getAuth(req);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const conversations = await prisma.conversation.findMany({
    where: {
      OR: [{ user1Id: userId }, { user2Id: userId }]
    }
  });
  const clerk=await clerkClient()
  const formattedConversations = await Promise.all(
    conversations.map(async (conversation) => {
      const otherUserId = conversation.user1Id === userId ? conversation.user2Id : conversation.user1Id;

      // Fetch user data from Clerk
      const clerkUser = await clerk.users.getUser(otherUserId);

      return {
        conversationId: conversation.id,
        otherUserId: clerkUser.id,
        otherUserUsername: clerkUser.username || clerkUser.emailAddresses[0]?.emailAddress,
        otherUserImage: clerkUser.imageUrl,
      };
    })
  );

  return NextResponse.json({ success: true, conversations: formattedConversations },{status:200});
} catch (error) {
  return NextResponse.json({msg:"Error while getting conversations"},{status:500})
}
}
