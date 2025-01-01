import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
             <img src="dhttps://imgs.search.brave.com/ZPy5YUBF3mvv5IdqWZpFd_fKdm-SS8o6jYNEyPQL1D0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/L2MvY2UvR2V0LXRo/ZS1VUkwtZm9yLVBp/Y3R1cmVzLVN0ZXAt/MTktVmVyc2lvbi0y/LmpwZy92NC00NjBw/eC1HZXQtdGhlLVVS/TC1mb3ItUGljdHVy/ZXMtU3RlcC0xOS1W/ZXJzaW9uLTIuanBn" />
        
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
