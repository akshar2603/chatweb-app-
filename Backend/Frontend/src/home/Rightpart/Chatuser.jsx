import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://imgs.search.brave.com/ZPy5YUBF3mvv5IdqWZpFd_fKdm-SS8o6jYNEyPQL1D0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/L2MvY2UvR2V0LXRo/ZS1VUkwtZm9yLVBp/Y3R1cmVzLVN0ZXAt/MTktVmVyc2lvbi0y/LmpwZy92NC00NjBw/eC1HZXQtdGhlLVVS/TC1mb3ItUGljdHVy/ZXMtU3RlcC0xOS1W/ZXJzaW9uLTIuanBn"/>
          </div>
        </div>  
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;
