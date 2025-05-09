import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { PrismaClient } from "@/generated/prisma";



const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { userId } = await getAuth(req);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { otherUserId } = await req.json();
        if (!otherUserId) {
            return NextResponse.json({ message: "otherUserId is required" }, { status: 400 });
        }

        // Check if the conversation already exists between these two users
        const existingConversation = await prisma.conversation.findFirst({
            where: {
                OR: [
                    { user1Id: userId, user2Id: otherUserId },
                    { user1Id: otherUserId, user2Id: userId }
                ]
            }
        });

        if (existingConversation) {
            return NextResponse.json(
                { message: "Conversation already exists",success:false, conversationId: existingConversation.id,code:"EXISTS" },
                { status: 200 }
            );
        }

        // Create a new conversation between the two users
        const newConversation = await prisma.conversation.create({
            data: {
                user1Id: userId,
                user2Id: otherUserId,
            }
        });

        return NextResponse.json({ success: true, conversationId: newConversation.id });
    } catch (error) {
        return NextResponse.json({success:false,msg:"Error while creating conversation"},{status:500})
    }
}
