'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function ConversationsPage() {
    const [isConversationLoading, setISConversationLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        const load = async () => {
            try {
                setISConversationLoading(true)
                const res = await axios.get('/api/chat/conversations')

                console.log(res.data);
                setConversations(res.data.conversations)
            } catch (error) {
                console.log(error);

            } finally {
                setISConversationLoading(false)
            }
        }
        load()
    }, [])
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>
            {isConversationLoading ? <span className='loading loading-lg'></span>:
     <div className="w-full md:w-64 bg-base-200 p-6 space-y-4">
    <div className="">
    <h2 className="text-xl font-semibold mb-4">Conversations</h2>
  
  {/* <!-- Scrollable area --> */}
  <div className="flex-1 overflow-y-auto space-y-2">
    {/* <!-- Chat item --> */}
    {
      conversations.map(i=>(
        <Link href={`/conversations/${i?.conversationId}`} key={i?.conversationId} className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 transition">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={i?.otherUserImage} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-base-content">{i?.otherUserUsername}</h3>
          
        </div>
      
      </Link>
      ))
    }
  

    
  </div>
    </div>
  
  </div>}
        </div>
    )
}

export default ConversationsPage