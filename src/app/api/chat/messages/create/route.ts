import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()
import Pusher from 'pusher';

export const pusherServer = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});
export async function POST(req: Request) {
  try {
    const { userId } = await getAuth(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { receiverId, message } = await req.json();

    if (!receiverId || !message) {
      return new NextResponse('Invalid data', { status: 400 });
    }

    // Find or create the conversation
    let conversation = await prisma.conversation.findFirst({
      where: {
        OR: [
          { user1Id: userId, user2Id: receiverId },
          { user1Id: receiverId, user2Id: userId },
        ],
      },
    });

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: { user1Id: userId, user2Id: receiverId },
      });
    }

    const newMessage = await prisma.chatMessage.create({
      data: {
        conversationId: conversation.id,
        senderId: userId,
        receiverId,
        message,
      },
    });

    // Real-time update via Pusher
    const channelName = `chat-${conversation.id}`;
    await pusherServer.trigger(channelName, 'new-message', newMessage);
    return NextResponse.json({success:true},{status:200})
  } catch (error) {
    return NextResponse.json({ success: false, msg: "Error while creating message" }, { status: 500 })
  }
}
