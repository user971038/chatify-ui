import React, { useState, useEffect } from 'react';
import { socket } from '.././socket';
import './Components.css'

// did it detect my changes or...?

const Chats = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('chat message', (msg, serverOffset) => {
            console.log("Mensaje desde Server:", msg);
            socket.auth.serverOffset = serverOffset;
            setMessages((prev) =>[...prev, msg])
        });
        return () => {
            socket.off('chat message')
        };
    }, []);

    return (
        <div className="container" id="chats-container">
            {messages?.map((m) => (
                <p>{m}</p>
            ))};
        </div>
    );
};

export default Chats;