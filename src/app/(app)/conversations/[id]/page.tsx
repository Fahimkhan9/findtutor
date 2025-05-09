'use client'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import Pusher from 'pusher-js';
import clsx from "clsx";
import { useUser } from '@clerk/nextjs';
export const pusherClient = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
});
function ConvoMessagePage({  params }: { params: Promise<{ id: string }> }) {
    const {id}=use(params)
    const [isMessagesLoading,setIsMessagesLoading]=useState(false)
    const [messages,setMessages]=useState([])
    const {user}=useUser()
    const [newMessage, setNewMessage] = useState("");
    const load=async ()=>{
      try {
        setIsMessagesLoading(true)
        const data={
          conversationId:id
        }
        const res=await axios.post('/api/chat/messages',data)
        console.log(res.data);
        setMessages(res.data.messages)
      } catch (error) {
        
      }finally{
        setIsMessagesLoading(false)
      }
    }
    useEffect(()=>{
      load()
      
    const channel = pusherClient.subscribe(`chat-${id}`);
    channel.bind('new-message', (msg: any) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      channel.unbind_all();
      pusherClient.unsubscribe(`chat-${id}`);
    };
    },[id])
    const sendMessage = async () => {
      if (!newMessage.trim()) return;
      const data={
        receiverId: messages.length > 0
        ? messages[0]?.senderId === user?.id
          ? messages[0].receiverId
          : messages[0].senderId
        : '', 
      message: newMessage,
      }
      await axios.post('/api/chat/messages/create',data)
      
      setNewMessage('');
    };
  return (
    <div>
      <div className=" overflow-y-auto h-100">
              {messages.map((msg) => (
                <div
                  key={msg?.id}
                  className={clsx("chat", msg?.senderId === user?.id ? "chat-end" : "chat-start")}
                >
                  <div className="chat-bubble">{msg?.message}</div>
                </div>
              ))}
            </div>
      
            <div className="p-4 bg-base-100 border-t border-base-300 flex items-center gap-2">
              <input
                className="input input-bordered flex-1"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button className="btn btn-primary" onClick={sendMessage}>
                Send
              </button>
            </div>
    </div>
  )
}

export default ConvoMessagePage