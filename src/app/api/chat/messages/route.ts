import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function POST(req: Request) {
 try {
  const { userId } =await getAuth(req);
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const {conversationId}=await req.json()
  
  if (!conversationId) {
    return NextResponse.json({ message: "conversationId is required" }, { status: 400 });
  }

  // Check if the conversation exists
  const conversation = await prisma.conversation.findUnique({
    where: { id: parseInt(conversationId) },
  });

  if (!conversation) {
    return NextResponse.json({ message: "Conversation not found" }, { status: 404 });
  }

  // Check if the user is part of the conversation
  if (![conversation.user1Id, conversation.user2Id].includes(userId)) {
    return NextResponse.json({ message: "You are not part of this conversation" }, { status: 403 });
  }

  // Fetch all messages in the conversation
  const messages = await prisma.chatMessage.findMany({
    where: { conversationId: conversation.id },
    orderBy: { createdAt: "asc" }, // Sort messages by creation date
  });

  return NextResponse.json({ success: true, messages });
 } catch (error) {
  return NextResponse.json({success:false,msg:"Error while getting messages "},{status:500})
 }
}
