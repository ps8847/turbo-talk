import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSocket } from "../../context/SocketContext";
import ChatMain from "./ChatMain";
import SideBar from "./SideBar";
import { List } from "@phosphor-icons/react"; // Hamburger icon

const Chat = () => {
    const socket = useSocket();
    const { conversationId } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        if (conversationId) {
            socket.emit('room:join', conversationId);
        }
        return () => {
            if (conversationId) {
                socket.emit('room:leave', conversationId);
            }
        }
    }, [conversationId, socket]);

    return (
        <div className="p-2 sm:p-7 bg-backgroundSecondary">
            {/* Hamburger icon only on mobile */}
            <div className="sm:hidden flex justify-between items-center mb-2">
                <button onClick={() => setShowSidebar(true)} className="text-xl p-2">
                    <List size={32} />
                </button>
                <p className="font-bold text-lg">TurboTalk</p>
            </div>

            <div className="flex w-full rounded-lg bg-white h-[92vh] overflow-hidden relative">
                {/* Sidebar */}
                <div
                    className={`fixed sm:static z-30 sm:z-auto bg-white h-full w-[80%] max-w-xs transition-transform duration-300 ease-in-out 
                    ${showSidebar ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:flex`}
                >
                    <SideBar onClose={() => setShowSidebar(false)} />
                </div>

                {/* Overlay on mobile when sidebar is open */}
                {showSidebar && (
                    <div
                        onClick={() => setShowSidebar(false)}
                        className="fixed inset-0 bg-black bg-opacity-40 z-20 sm:hidden"
                    />
                )}

                {/* ChatMain area */}
                <div className="flex-1">
                    {
                        conversationId ? (
                            <ChatMain conversationId={conversationId} />
                        ) : (
                            <div className="h-full flex items-center justify-center">
                                <p>No Chat Found</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Chat;
