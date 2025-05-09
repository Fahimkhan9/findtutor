"use client";

import { useState } from "react";
import clsx from "clsx";



export default function Messages({messages}) {
  const [chatMessages, setChatMessages] = useState(messages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setChatMessages([...chatMessages, { id: Date.now(), text: newMessage, fromMe: true }]);
    setNewMessage("");
  };

  return (
    <div className="">
      <div className=" overflow-y-auto h-100">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={clsx("chat", msg.fromMe ? "chat-end" : "chat-start")}
          >
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-base-100 border-t border-base-300 flex items-center gap-2">
        <input
          className="input input-bordered flex-1"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
