'use client';

import { useSocket } from "@/context/SocketContext";
import { useUser } from "@clerk/nextjs";
import Avatar from "./Avatar";

export const ListOnlineUsers = () => {
    const { user } = useUser()
    const { onlineUsers } = useSocket()

    if (!onlineUsers || onlineUsers.length === 0) {
        return <div>No users online</div>;
    }

    return (
        <div>
            {onlineUsers.map(user => (
                <div key={user.userId}>
                    <Avatar src={user.profile.imageUrl} />
                    <div>{user.profile.fullName?.split(' ')[0]}</div>
                </div>
            ))}
        </div>
    );
};

export default ListOnlineUsers;